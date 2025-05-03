import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css';

function Experience () {
    return (
        <div className='experience-content'>
            <section className="experience-card">
                <h1> Work Experience </h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Nov 2024 - Present (Ending May 2025)"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Software Engineer Intern</h3>
                        <h4 className="custom-timeline-element-subtitle">@ Kolekti (part of The Adaptavist Group)</h4>
                        <p>
                            <ul>
                                <li> Worked in a cross-functional and cross-regional team with colleagues based in the headquarter at
                                London, UK, to deliver product to users that will help to enhance their work productivity</li>
                                <li> One of the main developers for the Quiz Macro project, a new feature for Forms for Confluence Cloud</li>
                                <li> Tech Stack: Atlassian Forge Framework, React, JavaScript, TypeScript</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Nov 2023 - Feb 2024"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Software Engineer Intern</h3>
                        <h4 className="custom-timeline-element-subtitle">@ MoneyMatch</h4>
                        <p>
                            <ul>
                                <li> Focused on backend development to implement new features for in-house
                                    fintech product to support local or international transactions across different use cases</li>
                                <li> Tech Stack: Laravel Framework, PHP, React</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>

            <div className="experience-card">
                <h1> Education Background </h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Feb 2022 - Feb 2025"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Bachelor of Computer Science in Data Science</h3>
                        <h4 className="custom-timeline-element-subtitle">@ Monash University Malaysia</h4>
                        <p>
                            <ul>
                                <li> CGPA: 3.76/4.00, WAM: 82 / 100 <br/>(First Class Honours)</li>
                                <li> Recipient of High Achiever Award 2022</li>
                                <li> Core computer science subjects taken:
                                    <ul>
                                        <li>Algorithms and Data Structures</li>
                                        <li>Theory of Computation</li>
                                    </ul>
                                </li>
                                <li> Data Science subjects taken:</li>
                                <ul>
                                    <li>Data Analytics</li>
                                    <li>Modelling for Data Analysis</li>
                                    <li>Business Intelligence and Data Warehousing</li>
                                    <li>Data Visualisation</li>
                                    <li>Databases</li>
                                    <li>Deep Learning</li>
                                </ul>
                                </ul>
                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Nov 2023 - Feb 2024"
                        iconStyle={{ background: '#800080', color: 'black'}}
                    >
                        <h3 className="custom-timeline-element-title">Cambridge GCE A-level</h3>
                        <h4 className="custom-timeline-element-subtitle">@ Sunway College KL</h4>
                        <p>
                            <ul>
                                <li> Grade: 3 A*, 1 B+</li>
                                <li> Subjects taken: Mathematics, Further Mathematics, Chemistry, Physics</li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </div>
    )
}

export default Experience;