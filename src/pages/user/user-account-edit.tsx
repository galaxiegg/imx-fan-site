import { useState, useEffect } from "react";
import {Formik, Form, FormikProps, FormikHelpers} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {BackendPaths} from "../../router/backend-paths";
import {User} from "../../infrastructure/backend/user";
import Layout from "../../components/common/layouts/layout";
import {Input} from "../../components/form/input";
import {Paths} from "../../router/paths";

interface FormValues {
  first_name: string,
  last_name: string,
}

export function UserAccountEdit() {
  const [initialValues, setInitialValues] = useState<FormValues>({
    first_name: '',
    last_name: '',
  });
  let navigate = useNavigate();

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get(BackendPaths.toUser())
        let user: User = data;
        setInitialValues({
          first_name: user.first_name,
          last_name: user.last_name,
        })
      }
    )()
  }, [])

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
  });

  const handleSubmit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    try {
      await axios.patch(BackendPaths.toUser(), values);
      formikHelpers.setSubmitting(false);
      navigate(Paths.toUserAccount());
    } catch (error: any){
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="px-10 py-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {(formik: FormikProps<FormValues>) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    id="first_name"
                    type="text"
                    label="First Name"/>
                </div>
                <div>
                  <Input
                    id="last_name"
                    type="text"
                    label="Last Name"/>
                </div>
              </div>
              <div className="flex gap-4 items-end justify-start pt-4">
                <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-500 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? "Submitting..." : "Save Changes"}
                </button>
                <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-500 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => navigate(Paths.toUserAccount())}>
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
