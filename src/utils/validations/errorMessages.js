export const computeMessage = (rule, substring) => {
  let message = "";
  var substring = substring.replace("_"," ");

  switch(rule.name) {
    case 'required': 
      message = "Please fill this";
      break;
    case 'max': 
      if(rule.numeric) {
        message = "Value should not be greater than " + rule.ruleValue;
      } else {
        message = "Input should not be more than " + rule.ruleValue + " characters";
      }
      break;
    case 'min': 
      if(rule.numeric) {
        message = "Value should not be less than " + rule.ruleValue;
      } else {
        message = "Input should not be less than " + rule.ruleValue + " characters";
      }
      break;
    case 'email': 
      message = "Please provide a valid email";
      break;
    default:
      message = rule.name;
  }
  return message;
}