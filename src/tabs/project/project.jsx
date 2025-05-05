import './project.css';
import fyp from '../../assets/fyp.png';
import ema from '../../assets/ema.png';
import weshare from '../../assets/weshare.png';
import tourismDashboard from '../../assets/tourism-dashboard.png';
import unemploymentDashboard from '../../assets/unemployment-dashboard.png';
import mstayDashBoard from '../../assets/mstay-analysis.png';
import bookstoreApp from '../../assets/bookstore-app.png';
import rogueLikeGame from '../../assets/rogue-like-game.png';
import vehicleTracker from '../../assets/vehicle-rental-tracker.png';
import expensesTracker from '../../assets/expenses-tracker.png';
import githubIcon from '../../assets/github.png';
import websiteIcon from '../../assets/website.png';
import playbuttonIcon from '../../assets/play-button.png';

function Project () {
    return (
        <div className='project-content'>
            <h1> Projects </h1>
            <div className="project-card">

                {/* FINAL YEAR PROJECT */}
                <div className="project-title">
                    <a
                        className="repo-item"
                        href="https://github.com/tongenLim0827/fyp-student-engagement-monitoring-system"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="repo-item" src={githubIcon} alt="GitHub" />
                    </a>
                    <a
                        className="repo-item"
                        href="https://drive.google.com/file/d/1RYvPSxnMrmBYqeA0HGKAaeuIPaN-DsIJ/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="repo-item" src={playbuttonIcon} alt="Demo Video" />
                    </a>
                    <h2>Final Year Project: FACS-based Emotion Mapping Technique for Real-time Student Engagement Monitoring System</h2>
                </div>
                <div className="project-card-inner">
                    <img
                        src={fyp}
                        alt="Final Year Project"
                        style={{ width: '400px', height: '250px' }}
                    />
                    <ul>
                        <li>Nominated as one of the top 10 teams out of 38 teams to compete for the Best Final Year Project Award 2024.</li>
                        <li>The model is trained with CASMEII and SAMM dataset, achieving a training accuracy of 97.85%.</li>
                        <li>Detected emotions: Focus, Boredom, Distraction, Frustration, Confusion</li>
                        <li>Technologies/Techniques/Tools used: 
                            <ul>
                                <li>GoPro camera to capture live video feeds</li>
                                <li><b>OpenCV</b> for image processing</li>
                                <li><b>CNN (Convolutional Neural Network)</b> based deep learning model</li>
                                <li><b>Facial Action Coding System (FACS)</b> based emotion mapping technique</li>
                                <li><b>Python</b> for data analysis</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='duo-project-container'>
                {/* React Expenses APPLICATION */}
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://tongenlim0827.github.io/react-expenses-tracker/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={websiteIcon} alt="Demo Video" />
                        </a>
                        <h2>Expenses tracker</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={expensesTracker}
                            alt="expense tracker application"
                            style={{ width: '400px', height: '250px' }}
                        />
                        <ul>
                            <li>A simple expense tracker application created with <b>React</b></li>
                            <li>User can add, view, update and delete the expenses</li>
                            <li>The list of expenses can also be sorted based on the filters applied</li>
                        </ul>
                    </div>
                </div>

                {/* EVENT MANAGEMENT APPLICATION */}
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://github.com/tongenLim0827/fit2095-a3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={githubIcon} alt="GitHub" />
                        </a>
                        <a
                            className="repo-item"
                            href="https://tongenlim0827.github.io/fit2095-a3/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={websiteIcon} alt="Demo Video" />
                        </a>
                        <h2>Event Management Application</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={ema}
                            alt="EMA"
                            style={{ width: '400px', height: '150px' }}
                        />
                        <ul>
                            <li>A single-page web application to manage events, classifying them
                            into categories, and integrated with Google services like translation and Text-to-Speech</li>
                            <li>Technologies/Techniques used: 
                                <ul>
                                    <li><b>Angular Framework</b></li>
                                    <li><b>JavaScript</b> and <b>TypeScript</b></li>
                                    <li><b>MongoDB</b> as database</li>
                                    <li><b>Google Cloud Platform</b> for deployment</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='duo-project-container'>
                {/* TRAVEL EXPENSES APPLICATION */}
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://github.com/tongenLim0827/travel-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={githubIcon} alt="GitHub" />
                        </a>
                        <a
                            className="repo-item"
                            href="https://drive.google.com/file/d/1svyU7JIQ5KIhx_ZYNUNpwQ6XB3d70PBf/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={playbuttonIcon} alt="Demo Video" />
                        </a>
                        <h2>Travel Expenses Splitting App</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={weshare}
                            alt="EMA"
                            style={{ width: '300px', height: '200px' }}
                        />
                        <ul>
                            <li>A travel expenses splitting app to track the total expenses spent in a trip,
                                categorising each expenses into various categories and perform splitting among travelers</li>
                            <li>Technologies/Techniques used: 
                                <ul>
                                    <li><b>Laravel Framework</b></li>
                                    <li><b>PHP</b></li>
                                    <li><b>MySQL</b> as database</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOOKSTORE APPLICATION */}
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://drive.google.com/file/d/1gHTHb0Dx1OfZQR5lbQl47ysf9eECUXzz/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={playbuttonIcon} alt="Demo Video" />
                        </a>
                        <h2>Bookstore Application</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={bookstoreApp}
                            alt="bookstore application"
                            style={{ width: '150px', height: '200px' }}
                        />
                        <ul>
                            <li>A mobile book store application to manage bookstore inventory</li>
                            <li>Technologies/Techniques used: 
                                <ul>
                                    <li><b>Android Studio</b></li>
                                    <li><b>Java</b></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='duo-project-container'>
                {/* TRAVEL EXPENSES APPLICATION */}
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://github.com/tongenLim0827/fit2099-asgn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={githubIcon} alt="GitHub" />
                        </a>
                        <h2>Console-based Rogue-like Game</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={rogueLikeGame}
                            alt="Rogue Like Game"
                            style={{ width: '150px', height: '200px' }}
                        />
                        <ul>
                            <li>Developed a console-based rogue-like game inspired by Elden Ring using <b>Java</b>, adhering to
                            Object-Oriented Programming and SOLID principles
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1> Data Science Projects </h1>
            <div className='duo-project-container'>
                {/* Malaysia Tourism Analysis */}
                <div className='project-card'>
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://github.com/tlim0031/data_viz2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={githubIcon} alt="GitHub" />
                        </a>
                        <a
                            className="repo-item"
                            href="https://tlim0031.github.io/data_viz2/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={websiteIcon} alt="Website" />
                        </a>
                        <h2>Malaysia Toursim Analysis</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={tourismDashboard}
                            alt="toursim dashboard"
                            style={{ width: '400px', height: '250px' }}
                        />
                        <ul>
                            <li>A webpage to present and analyse Malaysia tourism data using <b>Vega-lite Library,
                            HTML and CSS</b>.</li>
                        </ul>
                    </div>
                </div>

                <div className='project-card'>
                    {/* Unemployment Pattern */}
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://public.tableau.com/app/profile/tong.en.lim/viz/UnemploymentPatternsinMalaysia/Dashboard1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={websiteIcon} alt="Website" />
                        </a>
                        <h2>Unemployment Pattern Analysis</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={unemploymentDashboard}
                            alt="unemploymeny dashboard"
                            style={{ width: '400px', height: '250px' }}
                        />
                        <ul>
                            <li> A dashboard created with <b>Tableau</b> to analyze unemployment patterns in Malaysia.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='duo-project-container'>
                {/* PowerBI MStay */}
                <div className='project-card'>
                    <div className="project-title">
                        <h2>MStay Database Management and Analysis</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={mstayDashBoard}
                            alt="MStay dashboard"
                            style={{ width: '400px', height: '250px' }}
                        />
                        <ul>
                            <li>A dashboard created using <b>PowerBI</b> to present my findings on MStay data</li>
                            <li>Designed and created a data warehouse using Star Schema</li>
                            <li>Manipulated data and performed data analysis using <b>SQL</b></li>
                        </ul>
                    </div>
                </div>

                <div className='project-card'>
                    {/*  Vehicle Return Tracking System */}
                    <div className="project-title">
                        <a
                            className="repo-item"
                            href="https://drive.google.com/file/d/109ILCziumYIV54GLAmQzWNyvW0s1rBWS/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="repo-item" src={playbuttonIcon} alt="Demo" />
                        </a>
                        <h2> Vehicle Return Tracking System</h2>
                    </div>
                    <div className="project-card-inner-2">
                        <img
                            src={vehicleTracker}
                            alt="Vehicle Rental Tracker"
                            style={{ width: '400px', height: '250px' }}
                        />
                        <ul>
                            <li> A tracking system to track the return status of vehicle rental</li>
                            <li> Developed system with <b>Excel VBA</b> and visualized data using <b>PivotTable and PivotChart</b></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project;