import * as React from 'react';

export class HelloComponent extends React.Component {
  spanStyle = {
    color: '#FF0000'
  };

  render() {
    return <div><span style={this.spanStyle}>Hello World (From TSX)</span></div>;
  }
}
