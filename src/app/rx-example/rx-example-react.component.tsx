import * as React from 'react';
import {timer} from 'rxjs/observable/timer';

export interface RxProps {
  transpiler: string;
  framework: string;
  compiler: string;
}

// 'RxProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class RxExampleReactComponent extends React.Component<RxProps, {}> {

  componentDidMount() {
    timer(1000, 250).subscribe((value: number) => {
      this.setState({reactMilliseconds: value});
    });
  }

  constructor(props: RxProps) {
    super(props, {});

    this.state = { seconds: 0, reactSeconds: 0 };
  }

  render() {
    return <div>
      <h1>This is the {this.props.transpiler} and {this.props.framework} component</h1>
      <h2>Angular parent timer: { this.state['seconds'] }</h2>
      <h2>React component timer: { this.state['reactMilliseconds'] }</h2>
    </div>;
  }
}
