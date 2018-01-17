import { Component, OnInit } from '@angular/core';
import {RxExampleReactComponent} from './rx-example-react.component';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-rx-example',
  templateUrl: './rx-example.component.html',
  styleUrls: ['./rx-example.component.css']
})
export class RxExampleComponent implements OnInit {

  rxExampleReactComponent: RxExampleReactComponent;

  ngOnInit() {
    const reactProps = {
      transpiler: 'Angular 5',
      framework: 'React 16',
      compiler: 'none'
    };

    const source = timer(1000, 1000).subscribe((value: number) => {
      this.rxExampleReactComponent.setState({seconds: value});
    });

    this.rxExampleReactComponent = ReactDOM.render(
      React.createElement(RxExampleReactComponent, reactProps),
      document.getElementById('rxDiv')
    );
  }

}
