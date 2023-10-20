import './App.css';
import NavigationBar from './NavigationBar.js';
import { Routes, Route } from 'react-router-dom';
import About from './About.js'
import Resume from './Resume.js'


export default function App() {
  return (
    <div>
      <NavigationBar />
      <div className="app-container">
        <div className="inner-app-wrapper">
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </div>
     </div>
    </div>
 
  );
}