import './css/Projects.css';
import pawn from './images/pawn.jpg';
import logo from './images/react-logo.png';

function Projects(){
    return(
        <div id = "projects">
            <h2 id = "project-header"> These are my projects! </h2>

            <div id = "project-display">
                <section className = "sideHeaderCont">
                    <h3 className = "sideHeader"> Personal: </h3>
                </section>
                <section id = "project1">
                    <img className = "projectImage" src = {pawn}/>

                    <p className = "p-desc"> 
                    A functional chess program built in vanilla Java using object-oriented
                    design, Scanner, ArrayLists, Iterators, and Arrays.
                    </p>
                </section>

                <section id = "project2">
                    <img className = "projectImage" src = {logo}/>

                    <p className = "p-desc">
                        The website you are on right now :). Utilizes React Scroll
                        to navigate within a page, React Router to navigate between
                        pages, and React Components, CSS Grid, and JSX to form the page display.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Projects;