const { allowInsecurePrototypeAccess } = require("../");
const Handlebars = require("handlebars");

class TestClass {
  get aProperty() {
    return "propertyValue";
  }
  aMethod() {
    return "returnValue";
  }
}

describe("allow-prototype-access", () => {
  afterEach(() => jest.clearAllMocks());

  it("handlebars should not allow proto-access by default", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const template = Handlebars.compile("{{aProperty}} {{aMethod}}");
    const result = template(new TestClass());
    expect(result).toEqual(" ");
  });

  it("handlebars should allow proto-access if created with this module", () => {
    const newInstance = allowInsecurePrototypeAccess(Handlebars);

    const template = newInstance.compile("{{aProperty}} {{aMethod}}");
    const result = template(new TestClass());
    expect(result).toEqual("propertyValue returnValue");
  });
});
