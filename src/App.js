import './App.css';
import NavigationBar from './NavigationBar.js';
import { Routes, Route } from 'react-router-dom';
import About from './About.js'


export default function App() {
  return (
    <div>
      <NavigationBar />
      <div className="app-container">
        <div className="inner-app-wrapper">
          <Routes>
            <Route path="/" element={<About/>}/>
          </Routes>
        </div>
     </div>
    </div>
 
  );
}