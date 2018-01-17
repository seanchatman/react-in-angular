import * as React from 'react';
import DatePicker from 'react-datepicker';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';


interface State {
  startDate: any;
}

export class DatePickerExampleComponent extends React.Component {

  startDateSubject: Subject<any>;

  state: State = {
    startDate: moment()
  };

  constructor (props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.startDateSubject = new Subject();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log('date-picker-example.component.tsx::handleChange', 'data', date);
    this.setState({
      startDate: date
    });
    this.startDateSubject.next(date);
  }

  componentDidMount(): void {
    console.log('date-picker-example.component.tsx::componentDidMount', '');
  }

  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
    />;
  }
}
