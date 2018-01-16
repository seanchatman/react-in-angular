import { Component, OnInit } from '@angular/core';
import {RxExampleReactComponent} from './rx-example-react.component';
import * as ReactDOM from 'react-dom';
import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-rx-example',
  templateUrl: './rx-example.component.html',
  styleUrls: ['./rx-example.component.css']
})
export class RxExampleComponent implements OnInit {
  rxExampleReactComponent: RxExampleReactComponent;

  ngOnInit() {
    const helloProps: HelloWorldProps = {
      compiler: 'gcc',
      framework: 'react'
    };

    const source = timer(1000, 1000).subscribe((value: number) => {
      // this.hello.setState({seconds: value});
    });

    ReactDOM.render(
      React.createElement(RxExampleReactComponent, helloProps),
      document.getElementById('helloWorldDiv')
    );

    // console.log(new RxExampleReactComponent(helloProps));
  }

}
