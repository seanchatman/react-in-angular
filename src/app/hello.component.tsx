import * as React from 'react';
// import {DatePickerExampleComponent} from './date-picker-example.component';


export class HelloComponent extends React.Component {
  spanStyle = {
    color: '#00FF00'
  };

  render() {
    return (
      <div>
        <span style={this.spanStyle}>Hello World (From TSX)</span>
        {/*<DatePickerExampleComponent/>*/}
      </div>
    );
  }
}
