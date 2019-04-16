/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "lit-element";

import "@amyscript/custom-image/custom-image.js";
import "@amyscript/custom-heading/custom-heading.js";
import "@amyscript/custom-text/custom-text.js";
import "@amyscript/custom-card/custom-card.js";

/**
 * `custom-info-card`s
 * `Combines various elements into a info card`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class CustomInfoCard extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "custom-info-card";
  }

  // life cycle
  constructor() {
    super();
    this.imageUrl = "";
    this.heading = "";
    this.text = "";
    this.cardHeight = "100%";
    this.cardWidth = "300px";
    this.cardTitle = "";
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
customElements.define("custom-info-card", CustomInfoCard);
export { CustomInfoCard };
