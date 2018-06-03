import React, { Component } from 'react';
import helper from '@/utils/helper';

export default class App extends Component {
  constructor() {
    super();
    this.interval = null;
    this.formats = {
      12: '12 Hours',
      24: '24 Hours',
    };
    this.state = {
      time: '00:00:00',
      format: 12,
      amPm: 'am',
    };
  }

  render() {
    return <div className="clock">
      <div className="time">
        <p className="count">{this.state.time}</p>
        <p className = {
          `tooltip ${this.state.format === 12 ? '' : 'is-hidden'}`
        }>{this.state.amPm}</p>
      </div>
      <div className="format">
        <p>{this.formats[this.state.format]}</p>
        <button onClick={this.switchFormat.bind(this)}>Swith Mode</button>
      </div>

    </div>;
  }

  switchFormat() {
    this.setState({
      format: this.state.format === 12 ? 24 : 12,
    });
  }

  getTime() {
    const date = new Date();
    const hh = helper.leadZero(this.state.format === 12
      ? helper.getTwelve(date.getHours())
      : date.getHours());
    const mm = helper.leadZero(date.getMinutes());
    const ss = helper.leadZero(date.getSeconds());

    this.setState({
      time: `${hh}:${mm}:${ss}`,
      amPm: date.getHours() >= 12 ? 'pm' : 'am',
    });
    requestAnimationFrame(this.getTime.bind(this));
  }

  componentDidMount() {
    requestAnimationFrame(this.getTime.bind(this));
  }
}
