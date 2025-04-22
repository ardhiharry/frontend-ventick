import * as yup from 'yup';

const registerSchema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().nullable(),
  username: yup.string().required('Please enter your username'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(30, 'Password must be at most 30 characters')
    .required('Please enter your password')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
      'Password must contain at least one uppercase letter, one number, and one symbol'
    ),
  confirm_password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Please enter confirm password')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
      'Password must contain at least one uppercase letter, one number, and one symbol'
    ),
});

export default registerSchema;
