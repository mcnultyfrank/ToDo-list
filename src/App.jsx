import React, { Component } from 'react';
import "./App.css";
import Header from './components/Header';
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm/SubmitForm';


class App extends Component {
  state = {
    tasks: [],
    user: {}
  }
  componentDidMount() {
    const url = fetch(`https://api.randomuser.me/`)
      .then(res => res.json())
      .then(json => this.setState({user: json.results[0].name}));
      console.log(url);
      
  }
  handleDelete = (index) => {
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1);
    this.setState({tasks: newArray});
  }

  handleSubmit = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }


  render() { 
    return (
      <div class="container">
        <Header 
        user={this.state.user}
        tasks={this.state.tasks.length} />
        <SubmitForm onFormSubmit={this.handleSubmit} />
        <TodoList 
          tasks={this.state.tasks}
          onDelete={this.handleDelete} 
        />
      </div>
    );
  }
}
 
export default App;