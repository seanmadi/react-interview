import React, { Component } from 'react';

class Device extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.deviceName}</td>
        <td>{this.props.dateTerminated}</td>
        <td><a href="#" onClick={this.onRemove}>Remove</a></td>
      </tr>
    );
  }

  onRemove = () => {
    this.props.onRemove(this.props.id)
  }
}

export default Device;
