import * as yup from 'yup';

export default yup.object().shape({
    username: yup
    .string()
    .required("Username is required")
    .min(4,"Minimum length  is 4"),
    password: yup
    .string()
    .required("Password is required")
    .min(5,"Minimum length is 5"),
    email: yup.string().email(),
    role: yup
    .string()
    .required("Role is required")

}) 