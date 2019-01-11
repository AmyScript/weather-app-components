/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import '@amyscript/dsg-image/dsg-image.js';

/**
 * `dsg-info-card`
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
class DsgInfoCard extends LitElement {

  // render function
  render() {
    return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<div>This is the info card</div>
<dsg-image url=${this.imageUrl}></dsg-image>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  "imageUrl": {
    "name": "imageUrl",
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
    return "dsg-info-card";
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
customElements.define("dsg-info-card", DsgInfoCard);
export { DsgInfoCard };
