import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { 
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
    //this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: uniqid(),
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text : '',
        id: uniqid(),
     }, 
    });
  }

  handleEdit(id) {
    console.log(this.state.tasks.find(task => task.id === id))
  }


  handleDelete (id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id)
    });
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput"/>
          <button type="submit"> Add Task</button>
        </form>
        <Overview tasks={tasks} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}
export default App;
