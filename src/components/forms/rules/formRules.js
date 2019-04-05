import {
  required,
  email,
  minLength3,
  minLength8,
  minLength10,
  maxLength20,
  maxLength30,
  maxLength40,
  maxLength50,
  maxLength100,
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