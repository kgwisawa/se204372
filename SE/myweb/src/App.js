import {React} from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view';
import About from './view/about';
import Services from './view/home';
import Contact from './view/home';
import SignUp from './view/home';
import './App.css';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>

  );
}


export default App;
