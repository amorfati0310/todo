import React, {
  Component
} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoInput from "./components/TodoInput";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todos: [],
      id: 0,
    };
  }
  handleChange = e => {
    this.setState({
      newTodo: e.target.value,
    });
  };
  handleCreate = () => {
    let newTodo = this.state.newTodo.trim();
    if (!newTodo) return;
    //
    // let addTodo = { id: this.state.id, todo: newTodo, checked: null };
    this.setState({
      newTodo: "",
      id: this.state.id + 1,
      todos: [...this.state.todos, newTodo],
    });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };
  render() {
    const {
      newTodo,
      todos
    } = this.state;
    console.log("this.state.todos", this.state.todos);
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;
    return ( <
      div className = "App" >
      <
      TodoListTemplate form = { <
        TodoInput value = {
          newTodo
        }
        onChange = {
          handleChange
        }
        onKeyPress = {
          handleKeyPress
        }
        onClick = {
          handleCreate
        }
        />
      } >
      <
      TodoItemList todos = {
        todos
      }
      /> <
      /TodoListTemplate> <
      /div>
    );
  }
}

export default App;