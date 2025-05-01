import { useNavigate } from 'react-router-dom';
import '../App.css';
function Home({ setActiveTab }) {
    const navigate = useNavigate();

    return (
      <div className="app-content">
      <section id="home" className="intro">
        <h1>Hi! I'm <span>Tong En</span></h1>
        <h2>A Computer Science (Data Science specialisation) graduate from Monash University Malaysia</h2>
        <p>
            Fueled by a passion for coding and a drive to create impactful digital solutions.
            Looking for exciting opportunities in software development or data science where I can grow and contribute.
        </p>
        
        <div className="buttons">
            <button
                className="btn-primary"
                onClick={() => {
                    setActiveTab("contact");
                    navigate('/contact');
                }}
            >Contact Me</button>
            <button
                className="btn-outline"
                onClick={() => {
                    setActiveTab("projects");
                    navigate('/projects');
                }}
            >See Projects</button>
        </div>
      </section>
    <div className='profile-img'>
        <img src='images/profile.jpg' alt='profile'/>
    </div>
    </div>
    )
}

export default Home;