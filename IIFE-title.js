//IIFE function

//1b.Convert all the strings to title caps in a string array
const stringArray = ["hi vanakkam", "i am back"];

// IIFE to convert strings to title case
const titleCaseArray = (function (arr) {
  return arr.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
})(stringArray);

// Log the result
console.log(titleCaseArray);
