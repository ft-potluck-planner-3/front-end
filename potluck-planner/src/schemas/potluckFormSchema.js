// Library Imports
import * as yup from "yup";

const potluckFormSchema = yup.object().shape({
  potluckName: yup
    .string()
    .required("Please name your potluck")
    .min(2, "Potluck name must be over 2 characters"),
  date: yup.string().required("Please assign a date to your potluck"),
  time: yup.string().required("Please give your potluck a designated time"),
  location: yup.string().required("Please provide a location to your potluck"),
});

export default potluckFormSchema;
