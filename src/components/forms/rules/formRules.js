import {
  required,
  email,
  minLength1,
  minLength3,
  minLength8,
  minLength10,
  maxLength20,
  maxLength30,
  maxLength40,
  maxLength50,
  maxLength100,
  maxLength200,
} from './rules';

export const userLoginRules = {
  email: [required, email, minLength10, maxLength100],
  password: [required, minLength8, maxLength40],
}

export const userSignupRules = {
  firstname: [minLength3, maxLength30],
  lastname: [minLength3, maxLength30],
  email: [required, email, minLength10, maxLength100],
  username: [required, minLength8, maxLength40],
  password: [required, minLength8, maxLength40],
}

export const orderCreateRules = {
  currentLocation: [required, minLength10, maxLength100],
  to: [required, minLength10, maxLength100],
  from: [required, minLength10, maxLength100],
  description: [minLength10, maxLength200],
  contactPhone: [required, minLength10, maxLength20],
  contactEmail: [required, email, minLength10, maxLength100],
  weight: [required, minLength1, maxLength100],
}

export const editDestinationRules = {
  to: [minLength10, maxLength100],
}