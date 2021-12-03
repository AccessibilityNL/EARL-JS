import "chai/register-should.js"

import EarlDocument from "../src/models/EarlDocument.model.js"
import JsonldDocument from "../src/models/JsonldDocument.model.js"

describe("EarlDocument", function () {
  const anEarlDocument = new EarlDocument()

  it("should be an instance of a JsonldDocument", function () {
    anEarlDocument.should.be.an.instanceOf(JsonldDocument)
  })

  it("should have the earl rdf namespace as @vocab in @context", function () {
    anEarlDocument.should.have.nested
      .property("@context.@vocab")
      .to.equal("http://www.w3.org/ns/earl#")
  })
})
