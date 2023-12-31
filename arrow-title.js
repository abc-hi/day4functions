//Arrow function

//2b.Convert all the strings to title caps in a string array

const stringArray = ["hi vanakkam", "i am back"];

// IIFE to convert strings to title case
const titleCaseArray = (arr) => {
  return arr.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
};

// Log the result
console.log(titleCaseArray(stringArray));
