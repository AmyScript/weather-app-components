/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";

/**
 * `dsg-input-button`
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
class DsgInputButton extends LitElement {
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

        button {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          background-color: #df5555;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          padding: 0px;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 14px;
        }
      </style>
      <button id=${this.id} @click="${this.onClick}">+</button>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      onClick: {
        name: "onClick",
        type: "String",
        value: "",
        reflectToAttribute: false,
        observer: false
      },
      id: {
        name: "id",
        type: "String",
        value: "",
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
    return "dsg-input-button";
  }

  // life cycle
  constructor() {
    super();
    this.id = "";
  }

  /**
   * Method to emit event with button's id in e.detail.button when the button is clicked
   */
  onClick() {
    const event = new CustomEvent("buttonClicked", {
      detail: {
        button: this.id
      },
      bubbles: true
    });
    this.dispatchEvent(event);
    console.log("clicked" + this.id);
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
customElements.define("dsg-input-button", DsgInputButton);
export { DsgInputButton };
