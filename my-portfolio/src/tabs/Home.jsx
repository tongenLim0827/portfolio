import { useNavigate } from 'react-router-dom';
import '../App.css';
function Home({ setActiveTab }) {
    const navigate = useNavigate();

    return (
      <div className="app-content">
      <section id="home" className="intro">
        <h1>Hi! I'm <span>Tong En</span></h1>
        <h2>A Computer Science graduate from Monash University Malaysia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et officiis suscipit ut assumenda libero tenetur expedita eaque, quaerat quasi.
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

    </div>
    )
}

export default Home;