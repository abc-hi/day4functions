//Anonymous function

//1b.Convert all the strings to title caps in a string array

const convertToTitleCase = function (inputString) {
  return inputString.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const stringArray = ["hi all", "i am back"];

const titleCaseArray = stringArray.map(function (str) {
  return convertToTitleCase(str);
});

console.log(titleCaseArray);
