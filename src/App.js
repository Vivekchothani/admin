
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './component/Home';
import Create from './Create';
import Update from './Update';


function App() {
  return (
    <>
      {/* <Home/> */}
    <BrowserRouter>
    <Routes>

        <Route path='/'   element={<Home/>}></Route>
        <Route path='/create'   element={<Create/>}>
          
         
        </Route>
        <Route path='/update/:id' element={<Update/>} ></Route>

    </Routes>
    </BrowserRouter>
    
    
   </>
  
  );
}

export default App;