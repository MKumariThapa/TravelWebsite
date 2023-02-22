import * as Yup from "yup";

export const SendEmailSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter your Name"),
  email: Yup.string().email().required("Please Enter your Email"),
  message: Yup.string().min(10).max(200).required("Please Enter your Message"),
});
