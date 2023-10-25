import { NavLink } from 'react-router-dom';

export default function NavigationBar({resetShowPages}) {
  return (
    <nav>
      <div className="nav-bar-wrapper">
        <div className="nav-bar-items"
        >
          <NavLink          
            onClick={resetShowPages}
            to="/">About
          </NavLink>
        </div>
        <div className="nav-bar-items"
         >
          <NavLink 
            onClick={resetShowPages}
            to="/resume">Resume
          </NavLink>
        </div>
        <div className="nav-bar-items"
         >
          <NavLink 
            onClick={resetShowPages}
            to="/projects">Projects
          </NavLink>
        </div>
        <div className="nav-bar-items"
         >
          <NavLink 
            onClick={resetShowPages}
            to="/publications">Publications
          </NavLink>
        </div>
      </div>
    </nav>
  )
}