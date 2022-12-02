import * as yup from 'yup';

export const leadFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('You must enter a  first name')
    .min(3, 'The  first name must be at least 3 characters'),
  middleName: yup
    .string()
    .required('You must enter a  middle name')
    .min(3, 'The  first name must be at least 3 characters'),
  lastName: yup
    .string()
    .required('You must enter a last name')
    .min(3, 'The  last name must be at least 3 characters'),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .required()
    .min(10, 'You must enter a  phone number'),

  postalCode: yup.string().required('You must enter a  postalcode'),

 
});
