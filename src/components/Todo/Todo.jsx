import React, { Component } from "react";
import styles from "./Todo.module.scss";
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'



class Todo extends Component {
  render() {
    return (
      <div className={styles.todo}>
        <h3>{this.props.content}</h3>
        <Button class="ui button" onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
      </div>
    );
  }
}

export default Todo;

