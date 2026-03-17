import { useFormik, Form, Field, ErrorMessage, FormikProvider } from "formik";
import styles from './RegisterForm.module.scss'
import { registerSchema } from "../../Helpers/validation";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      confirmPassword: "",
      year: "",
    },
    validationSchema: registerSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form className={styles.form}>
        <label>
          <Field type="text" name="login" placeholder="login"></Field>
          <ErrorMessage className={styles.error} name="login"></ErrorMessage>
        </label>
        <label>
          <Field type="email" name="email" placeholder="email"></Field>
          <ErrorMessage className={styles.error} name="email"></ErrorMessage>
        </label>
        <label>
          <Field type="password" name="password" placeholder="password"></Field>
          <ErrorMessage className={styles.error} name="password"></ErrorMessage>
        </label>
        <label>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          ></Field>
          <ErrorMessage className={styles.error} name="confirmPassword"></ErrorMessage>
        </label>
        <label>
          <Field type="" name="year" min="1900" placeholder="year"></Field>
          <ErrorMessage className={styles.error} name="year"></ErrorMessage>
        </label>
        <button type="submit">register</button>
      </Form>
    </FormikProvider>
  );
};

export default RegisterForm;
