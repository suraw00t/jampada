
// import './App.css';
import Home from './page/Home';
import { About } from './page/About';
import { Show } from './component/Show';
import { Input } from './component/Input';
//! Page for Sports
import { Bad } from './page/Bad';
import { Bball } from './page/Bball';
import { Fball } from './page/Fball';
import { Vball } from './page/Vball';
import { Pong } from './page/Pong';
import { Ten } from './page/Ten';
import { Signin } from './page/Signin';
import { Register } from './page/Register';

import Nav from './page/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/bad' element={<Bad/>} />
          <Route path='/bball' element={<Bball/>} />
          <Route path='/fball' element={<Fball/>} />
          <Route path='/vball' element={<Vball/>} />
          <Route path='/pong' element={<Pong/>} />
          <Route path='/ten' element={<Ten/>} />
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Register' element={<Register/>}/>

      </Routes>
  
      
    </div>
  );
}

export default App;
