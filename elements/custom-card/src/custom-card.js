/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */

import { LitElement, html } from "lit-element";

/**
 * `custom-card`
 * `Card for info card`
 *
 * @microcopy - language worth noting:
 *
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class CustomCard extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "custom-card";
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
}
customElements.define("custom-card", CustomCard);
export { CustomCard };
