const { expect } = require("chai")
const caesar = require("../src/caesar")

describe ("caesar", () => {
  it("Should return false if shift is undefined, equals 0, less than -25, or over 25", () => {
    const actual = caesar.caesar("word", 0)
    const expected = false
    expect(actual).to.eql(expected)
  })
 
  it("Should shift the letters of input value according to the shift value specified and return a string", () => {
    const actual = caesar.caesar("word", 4)
    const expected = "asvh"
    expect(actual).to.eql(expected)
})
})
