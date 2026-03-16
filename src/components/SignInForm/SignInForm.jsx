import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./SignInForm.module.scss";

const signInSchema = Yup.object({
  email: Yup.string().trim().email("enter correct email").required(),
  password: Yup.string().min(6, 'must be more 6').max(16).required("required"),
});

const SignInForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <label>
              <span>Email:</span>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component='span' className={styles.error}/>
            </label>
            <label>
              <span>Password:</span>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component='span' className={styles.error}/>
            </label>
            <input type="submit" value="sign in"/>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;

// gr3at@3wdsG
