import React, { Component } from "react";

class CountClass extends Component {

  state = {
    count: 1,
    name: "Aamee"
  }

  handleadd = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count} , {this.state.name}</h1>

        <button onClick={this.handleadd}>add</button>
      </div>
    );
  }
}

export default CountClass;
