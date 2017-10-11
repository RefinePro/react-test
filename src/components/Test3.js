// ERROR EXPLANATION:
// the error was there because javascript es6 classes
// don't have methods binded to class context by default,
// es6 classes are merely a syntax sugar over prototypal inheritance

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

		// second solution is to .bind() the context in the constructor
		// this.incrementCounter = this.incrementCounter.bind(this);
	}

	incrementCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<div>Counter value {this.state.counter}</div>
				<input
					type="button"
					value="Click here"
					onClick={this.incrementCounter}
				/>
			</div>
		);
	}
}

export default Test3;
