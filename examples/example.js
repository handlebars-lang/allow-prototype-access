class TestClass {
  aMethod() {
    return "returnValue";
  }
}

const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('../')
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)

const template = insecureHandlebars.compile('{{aMethod}}')
const output = template(new TestClass);

console.log(output)
