import "chai/register-should.js"

import JsonldDocument from "../src/models/JsonldDocument.model.js"

describe("JsonldDocument", function () {

  it("should have @context and @graph", function () {
    const aJsonldDocument = new JsonldDocument()

    aJsonldDocument.should.have.property("@context").which.is.an("object")
    aJsonldDocument.should.have.property("@graph").which.is.an("array")
  })
})
