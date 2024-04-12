import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Login from './Pages/Login';
import Footer from './Pages/Footer'
import Contact from './Pages/Contact';
import SignInForm from './Pages/SignInForm';
import Working from './Pages/Working';
import './App.css';


function App() {
  return (
    <div className='bg'>
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path="" element={<Home/>} />
    <Route path="/Home" element={<Home/>} />
     <Route path="/About" element={<About/>} />
    <Route path="/Service" element={<Service/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/Contact" element={<Contact/>} /> 
    <Route path="/SignInForm" element={<SignInForm/>} /> 
    <Route path="/working" element={<Working/>} /> 
    </Routes>
    <Footer/>
</BrowserRouter>

</div>
   );
 }

 export default App;
