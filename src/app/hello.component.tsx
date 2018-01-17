import * as React from 'react';
import {DatePickerExampleComponent} from './date-picker-example.component';
import {ReactBaseComponent} from './react-base.component';

export class HelloComponent extends ReactBaseComponent<{}, {}>  {
  spanStyle = {
    color: '#0000FF'
  };

  constructor(props: any = {}) {
    super(props);

    console.log('hello.component.tsx::constructor', '');
  }

  componentDidMount(): void {
    console.log('hello.component.tsx::componentDidMount', '');
  }

  render() {
    return (
      <div>
        <span style={this.spanStyle}>Hello World (From TSX)</span>
        <DatePickerExampleComponent />
      </div>
    );
  }
}
