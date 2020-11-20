import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

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
      <Form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add Todo"
          value={this.state.entry}
          onChange={(e) => this.setState({entry: e.target.value})}
        />
      </Form>
    );
  }
}

export default SubmitForm;
