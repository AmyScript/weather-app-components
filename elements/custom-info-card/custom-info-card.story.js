import { storiesOf } from "@storybook/polymer";
import * as storybookBridge from "@storybook/addon-knobs/polymer";
import { CustomInfoCard } from "./custom-info-card.js";

// need to account for polymer goofiness when webpack rolls this up
var template = require("raw-loader!./demo/index.html");
let pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
var array_matches = pattern.exec(template);
// now template is just the body contents
template = array_matches[1];
const stories = storiesOf("Info", module);
stories.addDecorator(storybookBridge.withKnobs);
stories.add("custom-info-card", () => {
  var binding = {};
  // start of tag for demo
  let elementDemo = `<custom-info-card cardWidth="400px"
  heading="-11&#176;" imageUrl="http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
  text="cloudy"
  cardTitle="Toronto"`;
  // mix in properties defined on the class
  for (var key in CustomInfoCard.properties) {
    // skip prototype
    if (!CustomInfoCard.properties.hasOwnProperty(key)) continue;
    // convert typed props
    if (CustomInfoCard.properties[key].type.name) {
      let method = "text";
      switch (CustomInfoCard.properties[key].type.name) {
        case "Boolean":
        case "Number":
        case "Object":
        case "Array":
        case "Date":
          method = CustomInfoCard.properties[key].type.name.toLowerCase();
          break;
        default:
          method = "text";
          break;
      }
      binding[key] = storybookBridge[method](
        key,
        CustomInfoCard.properties[key].value
      );
      // ensure ke-bab case
      let kebab = key.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(
        match
      ) {
        return "-" + match.toLowerCase();
      });
      elementDemo += ` ${kebab}="${binding[key]}"`;
    }
  }
  const innerText = storybookBridge.text("Inner contents", "Info");
  elementDemo += `> ${innerText}</custom-info-card>`;
  return `
  <h1>Live demo</h1>
  ${elementDemo}
  <h1>Additional examples</h1>
  ${template}
  `;
});
