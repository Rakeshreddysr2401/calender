import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
import {time} from '../utils/resource';
import { toast } from "react-toastify";
import { handleCreateSchedule } from "../utils/resource";

const Dashboard = () => {
    const [selectedTimezone, setSelectedTimezone] = useState({});
    const navigate = useNavigate();

    const [schedule, setSchedule] = useState([
        { day: "Sun", startTime: "", endTime: "" },
        { day: "Mon", startTime: "", endTime: "" },
        { day: "Tue", startTime: "", endTime: "" },
        { day: "Wed", startTime: "", endTime: "" },
        { day: "Thu", startTime: "", endTime: "" },
        { day: "Fri", startTime: "", endTime: "" },
        { day: "Sat", startTime: "", endTime: "" },
    ]);

    //
    const handleTimeChange = (e, id) => {
        const { name, value } = e.target;
        if (value === "Select") return;
        const list = [...schedule];
        list[id][name] = value;
        setSchedule(list);
    };

    const handleSaveSchedules = () => {
        //👇🏻 ensures the user's timezone has been selected
            if (JSON.stringify(selectedTimezone) !== "{}") {
                handleCreateSchedule(selectedTimezone, schedule, navigate);
            } else {
                toast.error("Select your timezone");
            }
        };

    const handleLogout = () => {
      localStorage.removeItem("_id");
      localStorage.removeItem("_myEmail");
      navigate("/");
    };
    
    const handleProfile=()=>{
      navigate(`/profile/${localStorage.getItem("_id")}`)
    }
   
    useEffect(() => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        }
    }, [navigate]);
    return (
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
           
            <main className='dashboard__main '>
                <h2 className='dashboard__heading'>Select your availability</h2>

                <div className='timezone__wrapper'>
                    <p>Pick your timezone</p>
                    <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                    />


                {schedule.map((sch, id) => (
                        <div className='form' key={id}>
                            <p>{sch.day}</p>
                            <div className='select__wrapper'>
                                <label htmlFor='startTime'>Start Time</label>
                                <select
                                    name='startTime'
                                    id='startTime'
                                    onChange={(e) => handleTimeChange(e, id)}
                                >
                                    {time.map((t) => (
                                        <option key={t.id} value={t.t} id={t.id}>
                                            {t.t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='select__wrapper'>
                                <label htmlFor='endTime'>End Time</label>
                                <select
                                    name='endTime'
                                    id='endTime'
                                    onChange={(e) => handleTimeChange(e, id)}
                                >
                                    {time.map((t) => (
                                        <option key={t.id} value={t.t} id={t.id}>
                                            {t.t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}



                </div>


                <div className='saveBtn__container'>
                    <button class="btn btn-primary" onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
                </div>
            </main>
        </div>
    );
};
export default Dashboard;