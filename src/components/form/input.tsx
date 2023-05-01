import {ErrorMessage, Field} from "formik";

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string,
  label: string
}

export function Input(props: InputProps) {
  const {id, label, ...restProps} = props;
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
             htmlFor={id}>
        {label}
      </label>
      <Field
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        name={id}
        {...restProps}/>
      <ErrorMessage name={id} component="div" className="text-red-500" />
    </>
  );
}
