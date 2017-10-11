// incrementCounter was not bound to this

import React, { Component, PropTypes } from "react";

import Image from "./Image";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

const {
  Button,
  Intent,
  Popover,
  PopoverInteractionKind,
  Position
} = "@blueprintjs/core";

class Test3 extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // this.incrementCounter() = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <div>Counter value {this.state.counter}</div>
        <input
          type="button"
          value="Click here"
          onClick={this.incrementCounter.bind(this)}
        />
      </div>
    );
  }
}

export default Test3;
