import React from 'react';
import './App.css';
import FormField from './Form';

class App extends React.Component {

  state = {
    inputResult: ``,






  };



  submit = (text)=> {
    this.setState({[`inputResult`]: text})

  }










  
  render = () => (
    <section className="fixmeapp">
    <header className="header">
      <h1>rep🔥irs</h1>
     <FormField sub={this.submit} />
    </header>
    <section className="main">       
      <ul className="repair-list">
      <li data-id="2" className="">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Car makes a funny sound</label>
          <button className="destroy"></button>
        </div>
      </li>
  
     </ul>
    </section>
    <footer className="footer">     
      <button className="clear-completed">Clear completed</button>
    </footer>
  </section>   
  );
}

export default App;
