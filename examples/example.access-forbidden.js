class TestClass {
  aMethod() {
    return "returnValue";
  }
}

const Handlebars = require("handlebars");
const template = Handlebars.compile("start {{aMethod}} end");
const output = template(new TestClass());

console.log(output);
