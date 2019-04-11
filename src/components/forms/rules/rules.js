export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const minLength1 = minLength(1)
export const minLength3 = minLength(3)
export const minLength8 = minLength(8)
export const minLength10 = minLength(10)

export const maxLength20 = maxLength(20)
export const maxLength30 = maxLength(30)
export const maxLength40 = maxLength(40)
export const maxLength50 = maxLength(50)
export const maxLength100 = maxLength(100)
export const maxLength200 = maxLength(200)