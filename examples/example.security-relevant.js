class TestClass {
  aMethod() {
    return "returnValue";
  }

  asTemplateInput() {
    return {
      aMethod: this.aMethod.bind(this)
    };
  }
}

const Handlebars = require("handlebars");

const template = Handlebars.compile("{{aMethod}}");
const output = template(new TestClass().asTemplateInput());

console.log(output);
