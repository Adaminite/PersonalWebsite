
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';
import './css/Home.css';

function Home(){
    return (
    <div id = "home">

    <div id = "side-nav">
        <SideNavbar/>
    </div>

    <div id = "content">
        <About/>
        <Projects/>
        <Contact/>
    </div>
    
    </div>
    )
}

export default Home;