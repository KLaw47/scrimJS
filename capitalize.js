const str = "hello world";
function cap(str) {
  // function takes a string and returns the same string with the first letter capitalized.
  // str.slice(1) returns the rest of the string after the first letter.
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(cap(str));
