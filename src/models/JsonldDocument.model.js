/**
 * [JsonldDocument description]
 */
class JsonldDocument {
  constructor(context = {}) {
    this["@context"] = context

    this["@graph"] = []
  }
}

export default JsonldDocument
