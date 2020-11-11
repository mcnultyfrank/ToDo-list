import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";

class SubmitForm extends Component {

  state = {
    entry: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.entry);
    this.setState({ entry: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add Todo"
          value={this.state.entry}
          onChange={(e) => this.setState({entry: e.target.value})}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default SubmitForm;
