/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

/**
 * `custom-input-button`
 * `input button`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class CustomInputButton extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "custom-input-button";
  }

  // life cycle
  constructor() {
    super();
    this.buttonId = "";
    this.buttonFunction = () => console.log("hello there");
  }

  /**
   * Method to emit event with button's id in e.detail.button when the button is clicked
   */
  onClick() {
    const event = new CustomEvent("buttonClicked", {
      detail: {
        button: this.buttonId
      },
      bubbles: true
    });
    this.dispatchEvent(event);
    this.buttonFunction();
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
customElements.define("custom-input-button", CustomInputButton);
export { CustomInputButton };
