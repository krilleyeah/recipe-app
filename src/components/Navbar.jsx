import {Link} from "react-router-dom"

function Navbar() {
    return <div id="navbar">
        <span>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link> 
        </span>
    </div>
}

export default Navbar;