import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext, useState} from "react";
import {BackendPaths} from "../../router/backend-paths";
import {Formik, Field, Form, FormikHelpers} from 'formik';
import {Input} from "../form/input";
import * as Yup from "yup";
import {LoggedInUserContext} from "../providers/logged-in-user-provider";


export interface LoginProps {
  openRegister?: boolean,
  onClose?: () => void,
  redirectOnLogin?: string,
}

interface FormValues {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  password_confirm: string,
}

export function Login(props: LoginProps) {
  const LOGIN_TOGGLED = false;
  const REGISTER_TOGGLED = true;
  const [toggle, setToggle] = useState<boolean>(LOGIN_TOGGLED);
  const toggleForm = () => setToggle((prevState: boolean) => !prevState);
  const { login } = useContext(LoggedInUserContext);

  let navigate = useNavigate();

  const submit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    const { setSubmitting, setErrors } = formikHelpers;
    const config = {
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    };
    if (toggle === LOGIN_TOGGLED) {
      try {
        await login(values.email, values.password);
        props.redirectOnLogin ? navigate(props.redirectOnLogin) : navigate(0);
      } catch (error: any) {
        if (error.response.status === 400) {
          setErrors({
            password: 'Email or password is incorrect'
          });
        } else {
          setErrors({
            password: 'Something went wrong. Please try again later.'
          });
        }
      }
    } else {
      try {
        await axios.post(
          BackendPaths.toRegister(),
          {
            email: values.email,
            password1: values.password,
            password2: values.password_confirm
          },
          config);
        props.redirectOnLogin ? navigate(props.redirectOnLogin) : navigate(0);
      } catch (error: any) {
        if (error.response.status === 400) {
          setErrors({
            email: error.response.data['email'],
            password: error.response.data['password1'],
          });
        } else {
          setErrors({
            email: 'Something went wrong. Please try again later.'
          });
        }
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          password_confirm: '',
        }}
        validationSchema={toggle === REGISTER_TOGGLED ?
          Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters"),
            password_confirm: Yup.string()
              .required("Confirm password is required")
              .oneOf([Yup.ref("password")], "Passwords must match"),
          }) :
          Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
          })
        }
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submit}
      >
        {(formik) => (
          <Form className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6">
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="john@email.com"/>
            </div>
            {toggle === REGISTER_TOGGLED && <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  id="firstName"
                  type="text"
                  label="First Name"
                  placeholder="Jane"/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Input
                  id="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Doe"/>
              </div>
            </div>}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Input
                  id="password"
                  type="password"
                  label="Password"/>
              </div>
            </div>
            {toggle === REGISTER_TOGGLED && <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <Input
                        id="password_confirm"
                        type="password"
                        label="Confirm Password"/>
                </div>
            </div>}

            <a
              className="mb-6 hover:underline hover:cursor-pointer"
              type="button"
              onClick={toggleForm}
            >
              {toggle === REGISTER_TOGGLED
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </a>

            <div className="flex justify-start">
              <div className="pr-4">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={formik.isSubmitting}>
                  {toggle === REGISTER_TOGGLED ? "Register" : "Sign In"}
                </button>
              </div>
              {props.onClose &&
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={props.onClose}>
                  Cancel
                </button>
              </div>
              }
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
