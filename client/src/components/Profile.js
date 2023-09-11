import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const { id } = useParams();
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [timezone, setTimezone] = useState("");
    const navigate=useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("_id");
        localStorage.removeItem("_myEmail");
        navigate("/");
      };
      
      const handleDashBoard=()=>{
        navigate(`/datepick`)
      }
      
useEffect(() => {
    function getUserDetails() {
        if (id) {
            fetch(`http://localhost:4000/schedules/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setUsername(data.username);
                    setSchedules(data.schedules);
                    setTimezone(data.timezone.label);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }
    getUserDetails();
}, [id]);

    return (
        <div>
        <nav className='navbar bg-lightyellow navbar-expand-lg' style={{ backgroundColor: 'lightyellow' }} >
        <div class="container-fluid">
            <span className="navbar-brand mb-0 h1" style={{ color: 'blue' }}>Get Me Therapy</span>
            <form class="container-fluid justify-content-end">
            <button onClick={handleDashBoard} className='logout__btn m-2'>
                DashBoard
            </button>
            <button onClick={handleLogout} className='logout__btn m-2'>
                Log out
            </button>
            
            </form>
        </div>
        </nav>
        <main className='profile'>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                <h2>Hello, {username}</h2>
                <p>Here is your schedule: - {timezone}</p>
                <table >
                    <tbody>
                        {schedules.map((sch) => (
                            <tr key={sch.day} className='col'>
                                <td style={{ fontWeight: "bold" }}>{sch.day.toUpperCase()}</td>
                                <td>{sch.startTime || "Unavailable"}</td>
                                <td>{sch.endTime || "Unavailable"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </main>
    </div>
    );
};

export default Profile;