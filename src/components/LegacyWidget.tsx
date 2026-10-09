import { Component } from 'react';

interface State {
  n: number;
  data: string[];
}

export class LegacyWidget extends Component<{ id: number }, State> {
  state: State = { n: 0, data: [] };
  timer?: number;

  componentWillMount() {
    this.setState({ n: 1 });
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.setState({ n: this.state.n + 1 }), 1000);
  }

  componentDidUpdate() {
    this.setState({ data: [...this.state.data, 'x'] });
  }

  handleClick() {
    this.setState({ n: this.state.n + 1 });
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.n}</button>;
  }
}
