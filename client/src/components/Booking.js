import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [schedule, setSchedule] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && startTime && endTime) {
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = selectedDate.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const newEntry = {
        day: formattedDate,
        startTime: startTime,
        endTime: endTime,
      };
      setSchedule([...schedule, newEntry]);

      setSelectedDate(null);
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <div>
      <div className="row card-body col-4 bg-blue bg-light">
        <form onSubmit={handleSubmit} className="form-group border border-3">
          <div className="col-md-3">
            <label className="form-group">Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="form-group">
            <label>Start Time:</label>
            <input
              className="form-control"
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="form-group">
            <label>End Time:</label>
            <input
              className="form-control"
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
