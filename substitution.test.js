const { expect } = require("chai")
const substitution = require("../src/substitution")

describe ("substitution", () => {
  it("Should encode a word if encode is true", () => {
    const actual = substitution.substitution("word", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'ilhq'
    expect(actual).to.eql(expected)
  })
 
  it("Should decode a word if encode is false", () => {
    const actual = substitution.substitution("ilhq", "xoyqmcgrukswaflnthdjpzibev", encode = false)
    const expected = 'word'
    expect(actual).to.eql(expected)
})
})

