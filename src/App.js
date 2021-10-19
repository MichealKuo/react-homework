import React, { Component } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class MyDatepickerComponent extends Component {
  state = {
    startDate: new Date(),
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    })
    if (new Date().getFullYear() - date.getFullYear() > 18) {
      alert('恭喜成年')
    } else {
      alert('小屁孩')
    }
  }

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.handleChange}
          selected={this.state.startDate}
          dateFormat="MM/dd/yyyy"
        />
      </div>
    )
  }
}

export default MyDatepickerComponent
