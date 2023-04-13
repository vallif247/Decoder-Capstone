// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f", 7:"g", 8:"h", 9:"i", 10:"j", 11:"k", 12:"l", 13:"m", 14:"n", 15:"o", 16:"p", 17:"q", 18:"r", 19:"s", 20:"t", 21:"u", 22:"v", 23:"w", 24:"x", 25:"y", 26:"z"}
 function caesar(input, shift, encode = true) {
  
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false
  } else {
    //turn input into numbers
    let charNumber = []
    for (let i = 0; i < input.length; i++) {
      if (input[i].toUpperCase().charCodeAt(0) > 64 && input[i].toUpperCase().charCodeAt(0) < 91) {
      charNumber.push(input[i].toUpperCase().charCodeAt(0))
      } else charNumber.push(input[i])
    }
    
    const arrayNumber = []
    if (encode == true) {
    charNumber.forEach((number) => {
      if (number > 64 && number < 91) { 
      arrayNumber.push(number-64+shift)
      } else arrayNumber.push(number)
    }) } else { //for decoding
       charNumber.forEach((number) => {
      if (number > 64 && number < 91) { 
      arrayNumber.push(number-64-shift)
      } else arrayNumber.push(number)
    })}
                          
    //handle numbers over 26 and under 1
    const shifted = arrayNumber.map((item) => {
      if (!isNaN(item) && item !== ' ') {
      if (item > 26) {
        item = item-26
      } else if (item <= 0) {
        item = item+26
      } 
      }
      return item
    })
    //turn the numbers into a letters array
 let arrayLetter = shifted.reduce((acc, letter) => {
   if (letter == " " || letter == ".") {
   acc += letter
   } else if (letter == 0) {
     acc += "z"
   } else acc += letters[letter]
   return acc
 }, [])

    return arrayLetter

  } 
} 

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
