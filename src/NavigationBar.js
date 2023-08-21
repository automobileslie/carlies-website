import { NavLink } from 'react-router-dom';

export default function NavigationBar(props) {
  return (
    <nav>
      <div className="nav-bar-wrapper">
        <div className="nav-bar-items"
        //   onClick={props.}
        >
          <NavLink to="/">About</NavLink>
        </div>
        {/* <div className="nav-bar-items"
        //   onClick={props.}
        >
          <NavLink to="/publications">Publications</NavLink>
        </div> */}
        {/* <div className="nav-bar-items"
        //   onClick={props.}
        >
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="nav-bar-items"
        //   onClick={props.}
        >
          <NavLink to="/cv">CV</NavLink>
        </div> */}
      </div>
    </nav>
  )
}