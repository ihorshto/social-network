export const required = value => {
 if(value) return 'error message';

 return "field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
 if (value.length && value.maxLength > 30) return 'max length is ${maxLength} symbols';
 return undefined;
}

