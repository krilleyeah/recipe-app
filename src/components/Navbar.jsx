import {Link} from "react-router-dom"

function Navbar() {
    return <div id="navbar">
            <Link to="/dashboard">Dashboard</Link> | <Link to="/about">About</Link>
    </div>
}

export default Navbar;