
import {Link} from 'react-router-dom';
import Home from './Home';

function Header(){
    return(
        <div className = "header">
            <nav className = "Navbar">
                <Link to = "/"> Home </Link>
                <Link to = "/about"> About Me </Link>
                <Link to = "/contact"> Contact </Link>
                <Link to = "/projects"> Projects </Link>
            </nav>
        </div>
    )
}

export default Header;