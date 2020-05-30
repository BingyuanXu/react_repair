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
        <button className="destroy" onClick={() => this.props.click(this.props.obj)}></button>      {/* 这个click里边的参数给定位到原app里边*/}
        
      </div>
    </li>
  );
}

export default Repair;