import React from 'react';
import './App.css';
import FormField from './Form';
import Singlerepair from './Singlerepair';

class App extends React.Component {

  state = {
    inputResult: ``,
    list: [],
  };

  submit = (text) => {
    this.setState( previous => {
      return {list : [...previous.list,{ id: text, task: text, completed: false } ]}
      })
  }

componentWillMount = () => {
  let newList =[];
  fetch(`https://5ed0108416017c00165e327c.mockapi.io/api/v1/repairs`)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    newList = json.map(ele => ({id: ele.id, task: ele.task, completed: ele.completed}));
    console.log(newList)
    this.setState({list : newList})
  })
}

  render = () => (
    <section className="fixmeapp">
      <header className="header">
        <h1>rep🔥irs</h1>
        <FormField sub={this.submit} />
      </header>
      <section className="main">
        <ul className="repair-list">
        {this.state.list.map(e => (
         <Singlerepair key={e.id} task={e.task} completed={e.completed} id={e.id}
        />))}         
        </ul>
      </section>
      <footer className="footer">
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
}

export default App;
