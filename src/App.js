import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from './Components/Dashboard/Dashboard';
import AllCourse from './Components/Dashboard/Courses/AllCourse';
import Channel from './Components/Dashboard/Channel';
import LiveStream from './Components/Dashboard/LiveStream';
import MyCourse from './Components/Dashboard/Courses/MyCourse';
import Chat from './Components/Dashboard/Chat';
import Analytics from './Components/Dashboard/Analytics';
import Settings from './Components/Dashboard/Settings';
import Contact from './Components/Home/Contact';
import Blog from './Components/Home/Blog';


function App() {
  
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/allcourse" element={<AllCourse />}></Route>
          <Route exact path="/explore-channel" element={<Channel />}></Route>
          <Route exact path="/live-stream" element={<LiveStream />}></Route>
          <Route exact path="/mycourse" element={<MyCourse />}></Route>
          <Route exact path="/message" element={<Chat />}></Route>
          <Route exact path="/analytics" element={<Analytics />}></Route>
          <Route exact path="/setting" element={<Settings />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
