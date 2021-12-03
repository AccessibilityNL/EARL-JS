import JsonldDocument from "./JsonldDocument.model.js"

/**
 * Creates a json-ld document for EARL
 *
 *  @class EarlDocument
 *
 *  @extends  JsonldDocument
 */
class EarlDocument extends JsonldDocument {
  constructor() {
    super({
      "@vocab": "http://www.w3.org/ns/earl#",
    })
  }
}

export default EarlDocument
