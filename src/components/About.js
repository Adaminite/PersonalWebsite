import me from './images/OmarNiazi.jpg';
import './css/About.css';

function About(){
    return(
        <div id = "about">
            <img id = "my-image" src = {me}/>

            <section>
                <h2 id = "about-me-header"> <u> About Me </u> </h2>
                <p id = "about-me"> 
                    
                    My name is Omar Niazi, and I am a sophomore at NYU studying computer science and mathematics. 
                    I am interesting in both software engineering and artificial intelligence. Currently, I specialize in
                    Java, but I am working to learn full-stack web development: after all, this webpage you are currently viewing is
                    my first attempt to learn React and front-end design. This is my journey.
                </p>

            </section>
                
            
        </div>
    )
}

export default About;