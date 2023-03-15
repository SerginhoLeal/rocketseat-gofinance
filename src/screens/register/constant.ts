import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  amount: Yup
    .number()
    .typeError('Enter numerical value')
    .positive('value cannot be negative')
    .required('value is required')
});