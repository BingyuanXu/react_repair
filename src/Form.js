import React from 'react';
import './Form.css';

class FormField extends React.Component {
  state = {
    textField: ``,
  };

  textFieldUpdate = (e) => {
    this.setState({textField : e.target.value})
  }

  updateText = (e) => {
    this.props.sub(this.state.textField);
    this.setState({textField: ``})
    e.preventDefault();    
  }

  render = () => (
    <form onSubmit={e => this.updateText(e)}>
      <input className="new-repair"
             placeholder="What needs to be repaired?"
             autoFocus=""
             value={this.state.textField}
             onChange={e => this.textFieldUpdate(e)}
      />
    </form>
  );
}

export default FormField;