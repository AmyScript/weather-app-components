/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

/**
 * `dsg-text`
 * `Text content for info card`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class DsgText extends LitElement {
  
  // render function
  render() {
    return html`
<style>:host { 
  display: block; 
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #959595;
  }
:host([hidden]) { display: none; }</style>
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
    return "dsg-text";
  }

  // life cycle
  constructor() {
    super();
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
customElements.define("dsg-text", DsgText);
export { DsgText };
