import * as Handlebars from "handlebars";

import { allowInsecurePrototypeAccess } from "./index";

const insecureHandlebars: typeof Handlebars = allowInsecurePrototypeAccess(Handlebars);

const template = insecureHandlebars.compile("abc", { compat: true });
template(
  { test: 1 },
  {
    helpers: {
      trim: (aString: string): string => aString.trim()
    }
  }
);
