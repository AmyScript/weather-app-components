/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

/**
 * `custom-image`
 * `image for info card`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class CustomImage extends LitElement {
  
  // render function
  render() {
    return html`
<style>:host { 
  display: flex; 
  justify-content: center;
  }
  img {
    border-radius: 50%;
    border: 2px solid #E8E8E8;
  }
:host([hidden]) { display: none; }</style>
<div>
  <img
    src=${this.url}
  />
</div>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  "url": {
    "name": "url",
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
    return "custom-image";
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
customElements.define("custom-image", CustomImage);
export { CustomImage };
