import * as React from 'react';
import {ReactBaseComponent} from './react-base.component';

export class HelloComponent extends ReactBaseComponent {
  spanStyle = {
    color: '#FF0000'
  };

  render() {
    console.log('hello.component.tsx::render', '');

    this.test();

    return <div>
      <span style={this.spanStyle}>Hello World (From TSX)</span>
      <app-angular-component></app-angular-component>
    </div>;
  }
}
