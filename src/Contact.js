import github from './github.png'
import gmail from './gmail.png'
import linkedin from './linkedin.png'

function Contact(){
    return (
        <div className="contact" id="contact-section">
            <h1>Contact Me</h1>
            <div className="contact-icons">
                <a href="mailto:ayushkishor17@gmail.com" target="_blank" rel="noreferrer"><img src={gmail} alt="email to ayush kishor" /></a>
                <a href="https://github.com/AyushKishor" target="_blank" rel="noreferrer"><img src={github} alt="ayush kishor's github" /></a>
                <a href="https://www.linkedin.com/in/ayushkishor/" target="_blank" rel="noreferrer"><img src={linkedin} alt="ayush kishor's linkedin" /></a>
            </div>
        </div>
    )
}

export default Contact;