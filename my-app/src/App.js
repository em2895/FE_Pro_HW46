import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersList from './components/UsersList';
import Albums from './components/Albums';
import Photos from './components/Photos';

function App() {
	return (
	  <Router>
		 <Link to='/'>List of users</Link> 
		 <Routes>
			<Route path="/" element={<UsersList />} />
			<Route path="/albums" element={<Albums />} />
			<Route path="/photos" element={<Photos />} />
		 </Routes>
	  </Router>
	);
 }
 
 export default App;
