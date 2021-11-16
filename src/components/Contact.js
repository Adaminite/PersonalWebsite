
function Contact(){
    return(
        <div id = "contact">
            <h2> Contact Me </h2>

            <form>
                <div>
                    <label for = "firstname"> First Name: </label>
                    <input type = "text" name = "firstname" placeholder = "John" required/>
                </div>
                <div>
                    <label for = "lastname"> Last Name: </label>
                    <input type = "text" name = "lastname" placeholder = "Doe" required/>
                </div>

                <div>
                    <label for = "email"> Email: </label>
                    <input type = "text" name = "email" placeholder = "johndoe123@gmail.com" required/>

                </div>

                <div>
                    <label for = "message"> Message: </label> <br/>
                    <textarea name = "message"/>
                </div>

                <div>
                    <input type = "submit" value = "Send" />
                </div>
            </form>
        </div>
    )
}

export default Contact;