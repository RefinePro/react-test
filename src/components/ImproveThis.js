import React, { Component, PropTypes } from "react";

import Image from "./Image";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class ImproveThis extends Component {
	static propTypes = {
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired,
	};

	static defaultProps = {
		first_name: 'John',
		last_name: 'Doe',
	}

	constructor(props) {
		super(props);
		this.state = {
			fullname: `${props.first_name} ${props.last_name}`,
		};
	}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	render() {
		return (
			<span>{this.state.fullname}</span>
		);
	}
}

export default ImproveThis;
