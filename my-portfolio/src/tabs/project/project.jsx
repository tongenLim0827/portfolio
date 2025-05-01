import './project.css';
function Project () {
    return (
        <div className='content'>
            <h1> Projects </h1>
            <div className="project-card">
                <div className="project-title">
                    <a
                        className="repo-item"
                        href="https://github.com/tongenLim0827/fyp-student-engagement-monitoring-system"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="repo-item" src="images/github.png" alt="GitHub" />
                    </a>
                    <h2>Final Year Project: FACS-based Real-time Student Engagement Monitoring System</h2>
                </div>
                <div className="project-card-inner">
                    <img
                        src="images/fyp.png"
                        alt="Final Year Project"
                        style={{ width: '400px', height: '250px' }}
                    />
                    <ul>
                        <li>Nominated as one of the top 10 teams out of 38 teams to compete for the Best Final Year Project Award 2024.</li>
                        <li>Collaborated in a team of 3 to develop a deep learning model with 97.85% training accuracy to track real-time student emotions in a physical classroom.</li>
                        <li>Used <b>OpenCV</b> for image processing and implemented a <b>CNN (Convolutional Neural Network)</b> model.</li>
                        <li>Mapped emotions based on the <b>Facial Action Coding System (FACS)</b>.</li>
                        <li>Performed data analysis using <b>Python</b> to evaluate model performance and insights.</li>
                    </ul>
                </div>
            </div>


            <div className='duo-project-container'>
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://github.com/tongenLim0827/fit2095-a3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src="images/github.png" alt="GitHub" />
                        </a>
                        <h2>Event Management Application</h2>
                    </div>
                    <div className="project-card-inner">
                        <img
                            src="images/ema.png"
                            alt="EMA"
                            style={{ width: '400px', height: '250px' }}
                        />
                        <ul>
                            <li>Collaborated in a team of 2 to develop a single-page web application to manage events, classifying them
                            into categories, and integrated with Google services like translation and Text-to-Speech</li>
                            <li>Utilized <b>Angular Framework</b> written in <b>JavaScript</b> and <b>TypeScript</b>, RESTful API to communicate with
                            MongoDB for data retrieval and management, performed deployment on Google Cloud Platform
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='project-card'>
                    <h2>Bookstore Management App</h2>
                </div>
            </div>

            <div className='duo-project-container'>
                <div className='project-card'>
                    <h2>Project Name</h2>
                </div>

                <div className='project-card'>
                    <h2>Project Name</h2>
                </div>
            </div>

            <div className='duo-project-container'>
                <div className='project-card'>
                    <h2>Project Name</h2>
                </div>

                <div className='project-card'>
                    <h2>Project Name</h2>
                </div>
            </div>
        </div>
    )
}

export default Project;