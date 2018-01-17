import * as React from 'react';
import {DatePickerExampleComponent} from '../date-picker/date-picker-example.component';
import {ReactBaseComponent} from '../react-base.component';
import {RxExampleReactComponent} from "../rx-example/rx-example-react.component";

export class HelloComponent extends React.Component<{}, {}>  {
  spanStyle = {
color: '#333'
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
