/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

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
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

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
