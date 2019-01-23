/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

import "@amyscript/dsg-image/dsg-image.js";
import "@amyscript/dsg-heading/dsg-heading.js";
import "@amyscript/dsg-text/dsg-text.js";
import "@amyscript/dsg-card/dsg-card.js";

/**
 * `dsg-info-card`s
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
      <style>
        :host {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          align-items: center;
        }

        :host([hidden]) {
          display: none;
        }

        dsg-image {
          padding-right: 15px;
        }

        .card-title {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 24px;
          text-align: center;
          color: #df5555;
          padding-bottom: 15px;
        }

        .card-content {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 25px;
        }
      </style>
      <slot></slot>
      <dsg-card width=${this.cardWidth} height=${this.cardHeight}>
        <div class="card-title">${this.cardTitle}</div>
        <div class="card-content">
          <dsg-image url=${this.imageUrl}></dsg-image
          ><dsg-heading content=${this.heading}></dsg-heading>
        </div>
        <dsg-text content=${this.text}></dsg-text>
      </dsg-card>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      imageUrl: {
        name: "imageUrl",
        type: "String",
        value: '""',
        reflectToAttribute: false,
        observer: false
      },
      heading: {
        name: "heading",
        type: "String",
        value: '""',
        reflectToAttribute: false,
        observer: false
      },
      text: {
        name: "text",
        type: "String",
        value: '""',
        reflectToAttribute: false,
        observer: false
      },
      cardHeight: {
        name: "cardHeight",
        type: "String",
        value: '""',
        reflectToAttribute: false,
        observer: false
      },
      cardWidth: {
        name: "cardWidth",
        type: "String",
        value: '""',
        reflectToAttribute: false,
        observer: false
      },
      cardTitle: {
        name: "cardTitle",
        type: "String",
        value: '""',
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
    return "dsg-info-card";
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
customElements.define("dsg-info-card", DsgInfoCard);
export { DsgInfoCard };
