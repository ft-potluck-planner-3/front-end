import * as yup from "yup";

const loginSchema = yup.object().shape({
  usename: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default loginSchema;
