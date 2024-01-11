var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence)
// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEachWord)


function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator)
  
}
// reverseBySeparator("Welcome to this Javascript Guide!",",")