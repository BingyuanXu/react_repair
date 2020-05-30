import React from 'react';
import './Singlerepair.css';
import './App.css';



class Repair extends React.Component {

  state = {
    textField: ``,

  };


  
  render = () => (
  
    <li data-id={this.props.id} className={this.props.completed ? "completed" : ""} >
        <div className="view">
          <input className="toggle" type="checkbox" />
            <label>{this.props.task}</label>
          <button className="destroy"></button>
        </div>
      </li>

    );

}

export default Repair;