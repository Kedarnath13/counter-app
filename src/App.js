import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterid) => {
    console.log("Delete Event Handler" + counterid);
    const countervalues = this.state.counters.filter((c) => c.id != counterid);
    this.setState({ counters: countervalues });
  };
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(counter.value);
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounts={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
