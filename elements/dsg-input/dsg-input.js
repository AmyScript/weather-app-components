/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";

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
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        input {
          background: #ffffff;
          border-radius: 20px;
          border-style: none;
        }
      </style>
      <input
        id=${this.id}
        type="text"
        value=${this.city}
        @input=${this.handleInput}
      />
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      city: {
        name: "city",
        type: "String",
        value: " ",
        reflectToAttribute: false,
        observer: false
      },
      id: {
        name: "id",
        type: "String",
        value: " ",
        reflectToAttribute: false,
        observer: false
      }
    };
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
    this.city = "";
    this.id = "";
  }

  handleInput(e) {
    this.city = e.target.value;
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
customElements.define("dsg-input", DsgInput);
export { DsgInput };
