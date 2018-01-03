/* eslint-disable */
export default function(values) {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'postalCode',
    'phoneNumber',
    'password',
    'reward'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  
  if (
    values.firstName &&
    !/(^[a-z ]+$)/i.test(values.firstName)
  ) {
    errors.firstName = 'First Name can only have alphabets';
  }
  if (
    values.lastName &&
    !/(^[a-z ]+$)/i.test(values.lastName)
  ) {
    errors.lastName = 'Last Name can only have alphabets';
  }

  if (
    values.postalCode &&
    !/^[0-9]*$/i.test(values.postalCode)
  ) {
    errors.postalCode = 'Zip Not Valid';
  }
   if (
    values.phoneNumber &&
    !/^\d{10}$/.test(values.phoneNumber)
  ) {
    errors.phoneNumber = 'Phone Not Valid';
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (
    values.password &&
    !/^.{4,30}$/.test(values.password)
  ) {
    errors.password = 'Password has to be from 4-30 characters';
  }
  if (
    values.reward &&
    !/^\d{16}$/.test(values.reward)
  ) {
    errors.reward = 'Reward should be 16 digit number';
  }

  return errors;
}

