import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import { NavFooter } from "./NavFooter";
import "./LayoutStyle.css";

export class Layout extends Component {
  static displayName = Layout.name;
  render() {
    return (
      <div>
        <div className="bodystyle">
          <NavMenu />
          <div className="">{this.props.children}</div>
        </div>
        <NavFooter />
      </div>
    );
  }
}
