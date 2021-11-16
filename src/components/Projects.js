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
                    {/*<img className = "projectImage" src = {pawn}/> {*/}

                    <p className = "p-desc"> 
                        Personal website built using JavaScript (React.js), CSS Flexbox, Grid, and JSX.
                        Utilizes React Scroll to navigate within a page, React Router to navigate between
                        pages, and React Components to form the final display.

                    </p>
                </section>

                <section id = "project2">
                    {/*<img id = "p2-image" className = "projectImage" src = {logo}/>*/}

                    <p className = "p-desc">
                        A functional chess program built in vanilla Java using object-oriented
                        design, Scanner, ArrayLists, Iterators, and Arrays. Enabled me to finetune 
                        my algorithmic design and understanding of object-oriented programming.
                    </p>
                </section>

                <section id = "course-projects">
                    <h3 className = "sideHeader"> Curricula: </h3>

                    <section id = "project3">
                        <p className = "p-desc">
                            A recursive puzzle solver built in Java. Solves a puzzle, which is 
                            a list of integers input via the command line. Each value represents the number
                            of 'steps' to be taken either up or down the array, whereby the goal is to reach
                            the final index of the array. Uses an object-oriented approach to recursively find
                            and store all unique solutions to the puzzle, displaying them to the user at the end.
                        </p>
                    </section>
                        
                    <section id = "project4">
                        <p className = "p-desc">
                            A pseudo-calculator built in Java. Accepts two String representations of non-negative integers
                            from the user, performing boolean and arithmetic (multiplcation and addition) operations on those two
                            integers. Each integer is represented as a doubly-linked list, which I implemented from scratch: including
                            the inner Node and Iterator classes, .equals(), and .compareTo(). Taught me how to integrate
                            and utilize specific data structures towards solving a specific problem.
                        </p>
                    </section>
                        
                    <section id = "project5">
                        <p className = "p-desc">
                            
                        </p>
                    </section>
                        
                    <section id = "project6">
                        <p className = "p-desc">
                            
                        </p>
                    </section>

                </section>
            </div>
        </div>
    )
}

export default Projects;