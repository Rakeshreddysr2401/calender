import React, { useState} from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
// import {GoogleLogin} from 'react-google-login';
// import axios from 'axios';
// import { toast } from "react-toastify";
// import { handleCreateSchedule } from "../utils/resource";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const  Datepick = () => {
    const [selectedTimezone, setSelectedTimezone] = useState({});
    const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [schedule, setSchedule] = useState([]);


//   const{startDateTime,setStartDateTime}=useState('')
//   const{endDateTime,setEndDateTime}=useState('')
//   const{signedIn,setSignedIn}=useState('false')

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("_myEmail");
    navigate("/");
  };
  
  const handleProfile=()=>{
    navigate(`/profile/${localStorage.getItem("_id")}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && startTime && endTime) {
      
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const day = selectedDate.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
     
      
      const newEntry = {
        day: formattedDate,
        startTime: startTime,
        endTime: endTime,
      };

      
      setSchedule([...schedule, newEntry]);

    //   handleCalender(selectedTimezone,day,startTime,endTime);
    // if (JSON.stringify(selectedTimezone) !== "{}") {
    //     handleCreateSchedule(selectedTimezone, schedule, navigate);
    // } else {
    //     toast.error("Select your timezone");
    // }
      
      setSelectedDate(null);
      setStartTime("");
      setEndTime("");
    }
    // const handleCalender=async (zone,sd,st,et)=>{
    //     const summary="GET ME THERAPHY"
    //     const description="Scheduled Successfully"
    //     const location=zone;
    //     const startTime=`{sd}+" "+{st}`
    //     const endTime=`{sd+" "+{et}}`
    //     await axios.post('api/create-event',{summary,description,location,startTime,endTime})
    //     .then(response=>{console.log(response.data)})
    //     .catch(error=>console.log(error.message))
    // }
    // const responseGoogle=response=>{
    //     console.log(response);
    //     const {code}=response;
        
    //     axios.post('/api/create-tokens',{code})
    //     .then(response=>{console.log(response.data)
    //       setSignedIn(true);})
    //     .catch(error=>console.log(error.message))
    //   }
    //   const responseError=error=>{
    //     console.log(error);
    //   }

  };
  

  return (

    <div>

    {/* {!signedIn ? (<GoogleLogin
              clientId='315012989935-sqsgep24c0hjhliop51r3in7knut912h.apps.googleusercontent.com'
              buttonText='Sign in & Authorize Calendar'
              onSuccess={responseGoogle}
              onFailure={responseError}
              cookiePolicy={'single_host_origin'}
        
              responseType='code'
              accessType='offline'
              scope='openid email profile https://www.googleapis.com/auth/calendar'
              />) :
        (<div>
        <div>
        <nav className='navbar bg-lightyellow navbar-expand-lg' style={{ backgroundColor: 'lightyellow' }} >
            <div class="container-fluid">
                <span className="navbar-brand mb-0 h1" style={{ color: 'blue' }}>Get Me Therapy</span>
                <form class="container-fluid justify-content-end">
                <button onClick={handleLogout} className='logout__btn m-2'>
                    Log out
                </button>
                <button onClick={handleProfile} className='logout__btn m-2'>
                    Sessions
                </button>
                </form>
            </div>
            </nav>
        </div>


      <div className="row card-body col-4 bg-blue bg-light">
      <form onSubmit={handleSubmit} class="form-group border border-3 ">
      <div className='timezone__wrapper'>
                    <p>Pick your timezone</p>
                    <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone(selectedTimezone)}
                    />
    </div>
        <div className="col-md-3">
          <label className="form-group">Date: </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="row">
        <div className="row">
          <label className="form-group ">Start Time: </label>
          <input className="form-control "type="time" value={startTime} onChange={handleStartTimeChange} />
        </div >
        </div>
        <div className="row">
        <div className="row">
          <label className="form-group ">End Time: </label>
          <input className="form-control" type="time" value={endTime} onChange={handleEndTimeChange} />
        </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      </div>
      <div>
        <h2>`Schedule: At {TimezoneSelect}`</h2>
        <ul>
          {schedule.map((entry, index) => (
            <li key={index}>
              {entry.day}, {entry.startTime} - {entry.endTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) }
  </div>) */}

{/* //NAVBAR */}
        <div>
        <nav className='navbar bg-lightyellow navbar-expand-lg' style={{ backgroundColor: 'lightyellow' }} >
            <div class="container-fluid">
                <span className="navbar-brand mb-0 h1" style={{ color: 'blue' }}>Get Me Therapy</span>
                <form class="container-fluid justify-content-end">
                <button onClick={handleLogout} className='logout__btn m-2'>
                    Log out
                </button>
                <button onClick={handleProfile} className='logout__btn m-2'>
                    Sessions
                </button>
                </form>
            </div>
            </nav>
        </div>
{/* //TAking INPUTS TIMES */}
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


      
{/* SHEDULE TIMING */}
      <div>
        <h2>`Schedule: At {TimezoneSelect}`</h2>
        <ul>
          {schedule.map((entry, index) => (
            <li key={index}>
              {entry.day}, {entry.startTime} - {entry.endTime}
            </li>
          ))}
        </ul>
      </div>

  </div>
  
  );
}

export default Datepick;