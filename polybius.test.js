const { expect } = require("chai")
const polybius = require("../src/polybius")

describe ("polybius", () => {
  it("Should encode a word if encode is true", () => {
    const actual = polybius.polybius("word")
    const expected = '25432441'
    expect(actual).to.eql(expected)
  })
 
  it("Should decode a word if encode is false", () => {
    const actual = polybius.polybius("25432441", encode = false)
    const expected = 'word'
    expect(actual).to.eql(expected)
})
})
