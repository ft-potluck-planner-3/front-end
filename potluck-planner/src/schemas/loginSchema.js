import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required("Enter your username"),
  password: yup.string().required("Enter your password"),
});

export default loginSchema;
