import React, { Component } from 'react';
import moment from "moment";
import Device from './Device';

function arrayToObject(data, key) {
  return data.reduce((acc, item) => ({
    ...acc,
    [item[key]]: item,
  }), {});
}

class App extends Component {
  state = {
    devices: [],
  }

  componentDidMount() {
    fetch('https://api.fda.gov/device/recall.json?search=&limit=5')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ devices: arrayToObject(data.results, "res_event_number") })
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Date Terminated</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }

  renderRows() {
    return Object.keys(this.state.devices)
      .sort((a, b) => moment(this.state.devices[b].event_date_terminated, 'YYYY-MM-DD').diff(moment(this.state.devices[a].event_date_terminated, 'YYYY-MM-DD')))
      .map((key) => {
        const device = this.state.devices[key];
        // Ensure openfda exists before trying to reach into device_name
        const deviceName = device.openfda ? device.openfda.device_name : "";

        return (
          <Device
            key={device.res_event_number}
            id={device.res_event_number}
            deviceName={deviceName}
            dateTerminated={device.event_date_terminated}
            onRemove={this.onRemove}
          />
        )
    })
  }

  onRemove = (id) => {
    const { [id]: value, ...devices } = this.state.devices;
    this.setState({ devices })
  }
}

export default App;
