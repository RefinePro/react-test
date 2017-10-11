import React, { Component, PropTypes } from "react";

import Image from "./Image";

class Test2 extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      fetched: null
    };
  }

  componentDidMount() {
    const URL =
      "https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false";

    fetch(URL)
      .then(resp => resp.json())
      .then(function(data) {});
  }

  render() {
    const style = {
      border: "1px solid black",
      padding: "10px"
    };
    return <div style={style}> Test </div>;
  }
}

export default Test2;
