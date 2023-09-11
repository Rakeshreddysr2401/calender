import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import BookUser from "./components/BookUser";
import { useNavigate } from "react-router-dom";
import Booking from "./components/Booking";
import Datepick from "./components/Datepick";
// import './App.css';

function App() {

  return (
    <div className="App">
      


      <main>

      
      <BrowserRouter>
            <Routes>
              
              <Route path='/' element={<Login/>}/>
              <Route path='/booking' element={<Booking/>}/>
              {/* <Route path='/datepick' element={<Datepick/>}/> */}
              <Route path='/register' element={<Signup/>}/>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/book/:user' element={<BookUser />} />
            </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
