import React from "react";
import Modalwin from "../Modalwin";

export default class MainComponent extends React.Component {
  state = {
    name: "Akash",
    surname: "Khatri",
    selectedOption: undefined
  };

  modalHanlder = () => {
    this.setState(() => ({
      selectedOption: true
    }));
  };

  modalCloseHandler = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  render() {
    return (
      <div>
        This is {this.state.name} {this.state.surname}
        Sunil Khatri
        <Modalwin
          selectedOption={this.state.selectedOption}
          modalHanlder={this.modalCloseHandler}
        />
        <button onClick={this.modalHanlder}>Toggle Modal</button>
      </div>
    );
  }
}
