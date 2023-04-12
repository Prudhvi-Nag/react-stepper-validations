import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './Pages/Home';
import Sass from './Pages/Sass';
import Sass2 from './Pages/Sass2';
import Form from  './Pages/Form';
import Counter from './Pages/Counter';

import FormStepper from './Pages/FormStepper';

const App = () => {
  return (
   <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Layout />} >
            <Route path="/" element={<Home/>}/>
            <Route path="sass" element={<Sass/>}/>
            <Route path="sass2" element={<Sass2/>}/>
            <Route path="form" element={<Form/>}/>
            <Route path="formstepper" element={<FormStepper/>}/>
            <Route path="counter" element={<Counter/>}/> 
        </Route>
        </Routes>
   </BrowserRouter>

  )
}

export default App