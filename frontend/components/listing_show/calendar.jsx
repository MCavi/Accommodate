import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import '../../../app/assets/stylesheets/_react_dates_override.css';
// import 'react-dates/lib/css/_datepicker.css';

class DayPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = { startDate: null, endDate: null, focusedInput: null };
    }

    onFocusChange(focusedInput) {
        this.setState({
            focusedInput: !focusedInput ? moment() : focusedInput,
        });
    }

    render() {
        return (
            <div>


                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />


            </div>
        )
    };
};




export default DayPicker;