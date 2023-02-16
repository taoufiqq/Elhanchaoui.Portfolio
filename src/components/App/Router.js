import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// ---------import Components Acceuil----------
import Me from '../Home/Me'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

function App () {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Me/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    );
 }

 export default App;