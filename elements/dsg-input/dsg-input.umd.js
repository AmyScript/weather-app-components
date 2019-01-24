/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

/**
 * `dsg-input`
 * `input element `
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class DsgInput extends LitElement {
  
  // render function
  render() {
    return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
  box-sizing: border-box;
}

input {
  background: #FFFFFF;
  border-radius: 20px;
  border-style: none;
  font-size: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  width: ${this.width};
  border: 1px solid lightgrey;
  padding: 5px;
  padding-left: 10px;
  box-sizing: inherit;
}

input:focus {
  outline: none;
}</style>
<input
  id=${this.inputId}
  type="text"
  .value=${this.city}
  @input=${this.handleInput}
/>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  "cityProp": {
    "name": "cityProp",
    "type": "String",
    "value": " ",
    "reflect": true,
    "attribute": true,
    "observer": false
  },
  "inputId": {
    "name": "inputId",
    "type": "String",
    "value": " ",
    "reflectToAttribute": false,
    "observer": false
  },
  "width": {
    "name": "width",
    "type": "String",
    "value": " ",
    "reflectToAttribute": false,
    "observer": false
  }
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "dsg-input";
  }

  // life cycle
  constructor() {
    super();
    this.cityProp = "";
    this.inputId = "";
    this.width = "100%";
  }

  handleInput(e) {
    this.cityProp = e.target.value;
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }
}
customElements.define("dsg-input", DsgInput);
export { DsgInput };
