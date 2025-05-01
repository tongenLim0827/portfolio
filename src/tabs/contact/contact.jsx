import './contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';

function Contact() {
    return (
        <div className="content">
            <h1>Let's Connect</h1>
            <p>I'm always open to new opportunities! Please feel free to reach out through any of the channels below.</p>
            <section className="image-container">

                {/* Phone */}
                <div className="contact-item">
                    <img src={phone} alt="Phone" />
                    <span className="contact-label">+60 123563238</span>
                </div>

                {/* Email */}
                <div className="contact-item">
                    <img src={email} alt="Email" />
                    <span className="contact-label">tongen2014@gmail.com</span>
                </div>

                {/* LinkedIn */}
                <a
                    className="contact-item"
                    href="https://www.linkedin.com/in/tong-en-lim-375237240"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedin} alt="LinkedIn" />
                    <span className='contact-label'>LinkedIn</span>
                </a>
            </section>
        </div>
    );
}

export default Contact;
