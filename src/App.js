import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Routes>
      <Route path='/h-portfolio' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>

    </Routes>
    </div>
    )
}

export default App;
