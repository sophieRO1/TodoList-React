import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items : [
      {id:1, name:'koko', age:22},
      {id:2, name:'jojo', age:20},
      {id:3, name:'roro', age: 23}
    ]
  }
  render() {
    return (
      <div className="App">
       todoList app
       <TodoItems items={this.state.items}/>
       <AddItem />
      </div>
    );
  }
}

export default App;
