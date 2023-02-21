//import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Routes } from 'react-router-dom'


import Layout from './component/Layout'
import Home from './component/Home'
import About from './About'
import Contact from './component/Contact'
function App() {
  return (
   <>
   <BrowserRouter basename="/react-portfolio">
   <Routes>
   <Route exact path='/react-portfolio' element={<Layout/>}>
   <Route index element={<Home/>}/>
   
   <Route path='about' element={<About/>}/>
   <Route path='Contact' element={<Contact/>}/>
   </Route>
   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
