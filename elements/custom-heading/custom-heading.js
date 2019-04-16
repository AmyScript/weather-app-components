/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

/**
 * `custom-heading`
 * `Heading for info card`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class CustomHeading extends LitElement {
  
  // render function
  render() {
    return html`
<style>:host { 
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 64px;
  color: #000000; 
  margin: 0px;
}
:host([hidden]) { display: none; }
h3 {
  margin: 0;
}</style>
<slot></slot>
<div>${this.content}</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  "content": {
    "name": "content",
    "type": "String",
    "value": "",
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
    return "custom-heading";
  }

  // life cycle
  constructor() {
    super();
    this.content = "";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

customElements.define("custom-heading", CustomHeading);
export { CustomHeading };
