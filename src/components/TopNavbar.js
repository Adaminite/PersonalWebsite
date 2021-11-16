import {Link} from 'react-router-dom';
function TopNavBar(){
    return(
        <div>
            <Link to ="/"> Home </Link>
            <Link to = "/resume"> Resume </Link>
        </div>
    )
}

export default TopNavBar;