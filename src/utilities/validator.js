const validators = {
  required: (message) =>
    value => (value || typeof value === 'number' ? undefined : message),
  minLength: (min, message) =>
    (value) => {
      return value && value.length < min ?
        message ? message : `Must be ${min} characters or less`
        : undefined
    },
  regex: (pattern, message) =>
    value => (value && !pattern.test(value) ? message : undefined)
}
    
export default validators;
  