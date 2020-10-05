import React, { Component } from "react";

class Counter extends Component {
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log(this);
  }*/

  renderTags() {}

  getBadgeClass() {
    return this.props.counter.value === 0
      ? "badge m-2 badge-warning"
      : "badge m-2 badge-primary";
  }
  render() {
    return (
      <div>
        <div className={this.getBadgeClass()}>{this.props.counter.value}</div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
