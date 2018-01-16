import * as React from 'react';
import {timer} from 'rxjs/observable/timer';

export interface RxProps {
  compiler: string;
  framework: string;
  setComponent: any;
}

// 'RxProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class RxExampleReactComponent extends React.Component<RxProps, {}> {

  length = 0;

  componentDidMount() {
    this.props.setComponent(this, this.state);

    timer(1000, 1000).subscribe((value: number) => {
      this.setState({seconds2: value});
    });
  }

  // componentWillMount() {
  //   console.log('hello.component.tsx::componentWillMount', '');
  // }

  // componentDidCatch() {
  //   console.log('hello.component.tsx::componentDidCatch', '');
  // }
  //
  // componentDidUpdate() {
  //   console.log('hello.component.tsx::componentDidUpdate', '');
  // }
  //
  // componentWillReceiveProps() {
  //   console.log('hello.component.tsx::componentWillReceiveProps', '');
  // }
  //
  // componentWillUpdate() {
  //   console.log('hello.component.tsx::componentWillUpdate', '');
  // }
  //
  // shouldComponentUpdate(nextProps: Readonly<HelloProps>, nextState: Readonly<{}>, nextContext: any): boolean {
  //   console.log('hello.component.tsx::shouldComponentUpdate', '');
  //   return true;
  // }

  constructor(props: RxProps) {
    super(props, {});

    this.state = { seconds: 0, seconds2: 0 };
  }

  render() {
    return <div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}! { this.state['seconds'] }</h1>
      <h2>Seconds 2: {this.state['seconds2']}</h2>
    </div>;
  }
}
