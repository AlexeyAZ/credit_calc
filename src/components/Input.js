import React, { PureComponent } from 'react';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      value: ''
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({value: e.target.value});
  }
  
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <input value={this.state.value} onChange={this.onValueChange}/>
        <p>
          {this.state.value}
        </p>
      </div>
    );
  }
}

export default Input;