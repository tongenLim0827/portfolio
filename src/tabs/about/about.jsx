import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './about.css';

function About () {
    return (
        <div className='about-content'>

            <h1> About Me </h1>
            <section className="description-card">
                <p>
                    A computer science graduate in data science specialisation who is well-equipped with foundational
                    knowledge in JavaScript, TypeScript, Java, SQL, Python, R and PHP. I am passionate and enthusiastic to
                    leverage these skills through hands-on experience of working in a professional environment. With 9 months
                    of working experience in real-world software development projects, I am committed to continuous self
                    development and learn new technologies, while collaborate effectively within teams.
                </p>
                <a
                    href="https://drive.google.com/file/d/1AqF8HTLStWYa2oKytfWlTe7v89zQj4be/view?usp=drive_link"
                    download="Lim Tong En_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    Download Resume
                </a>
            </section>

            <h1> Skills </h1>
            <section className="skills-container">
                <div className="skills-card">
                    <h3>Programming Language</h3>
                    <p>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>SQL</li>
                            <li>R</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>Microsoft VBA</li>
                        </ul>
                    </p>
                </div>

                <div className="skills-card">
                    <h3>Frameworks/Libraries</h3>
                    <p>
                        <ul>
                            <li>ReactJS</li>
                            <li>Laravel Framework</li>
                            <li>Angular Framework</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>Vega-lite</li>
                        </ul>
                    </p>
                </div>
                <div className="skills-card">
                    <h3>Tools</h3>
                    <p>
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>PowerBI</li>
                            <li>Tableau</li>
                            <li>AWS</li>
                            <li>Google Cloud Platform</li>
                            <li>Microsoft Excel: Pivot Table, Pivot Chart</li>
                            <li>Android Studio</li>
                        </ul>
                    </p>
                </div>
                <div className="skills-card">
                    <h3>Language</h3>
                    <p>
                        <ul>
                            <li>English</li>
                            <li>Chinese</li>
                            <li>Malay</li>
                            <li>Cantonese</li>
                            <li>Hokkien</li>
                        </ul>
                    </p>
                </div>
                
            </section>

            <section className="leadership-card">
                <h1> Leadership Experience </h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Apr 2023 - Nov 2024"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Events Officer</h3>
                        <h4 className="custom-timeline-element-subtitle">Monash University Malaysia Tech Club (MUMTEC)</h4>
                        <p>
                            <ul>
                                <li>Worked in a team of 5 to plan and execute events such as 36H Hackathon, MIND ENGINE
                                Career Fair, Industry Trip</li>
                                <li> Elected as Head of Events in term 2024</li>
                                <li> Involved in Mind Engine EXPO 2024 as a Program Management team lead in events department</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Feb 2024 - Mar 2024, Feb 2025 - Mar 2025"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Student Mentor</h3>
                        <h4 className="custom-timeline-element-subtitle">Monash University Student Association (School of IT)</h4>
                        <p>
                            <ul>
                                <li> Provide mentorship and support to Year 1 freshies to help them transition better into university life</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sept 2023 - Mar 2024"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Director of Speak Up! 14.0 Project</h3>
                        <h4 className="custom-timeline-element-subtitle">AIESEC in Sunway</h4>
                        <p>
                            <ul>
                                <li>Led a team of 4 by monitoring team progress and ensure project outcomes align with SDG 4 Quality Education </li>
                                <li>Build relationships with external partners and youths</li>
                                <li>Provide mentorship to members for their personal growth</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Apr 2023 - Sept 2023"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Organising Committee Youth Experience (OCYXP) of Get First, Get Inclusive 8.0 Project</h3>
                        <h4 className="custom-timeline-element-subtitle">AIESEC in Sunway</h4>
                        <p>
                            <ul>
                                <li>Worked in a team of 4 by monitoring team progress and ensure project outcomes align with SDG 10 Reduce Inequalities </li>
                                <li>Build relationships with external partners and youths</li>
                                <li>Issue all appropriate legal paperwork (eg MYV agreement) and ensure volunteers standard are fulfilled</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>

        </div>
    )
}

export default About;