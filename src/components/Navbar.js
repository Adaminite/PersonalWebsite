import {Link} from 'react-scroll';
import './css/Navbar.css';

function Navbar(){
    return(
        <div className = "navContainer">
            <nav className = "Navbar">
                <Link className = "nav-button" 
                      to = "about"
                      delay = {10}
                      duration = {1000}
                      smooth = {true}
                > 
                 About Me 
                </Link>

                <Link className  = "nav-button" 
                      to = "projects"
                      delay = {10}
                      duration = {1000}
                      smooth = {true}
                > 
                 Projects 
                </Link>
                
                <Link className  = "nav-button" 
                      to = "contact"
                      delay = {10}
                      duration = {1000}
                      smooth = {true}
                > 
                 Contact 
                </Link>


            </nav>
        </div>

    )
}

export default Navbar;