import ScrollSectionComponent from "../components/ScrollSectionComponent";

import { About } from '../../Data'
import '../../styles/About.scss'

export default function AboutSection() {
    return (
        <ScrollSectionComponent id="about">
            <div className="profile">
                <div className="info">
                    <h1 className="section-title">{About.title}</h1>
                    <p>
                    As a Frontend Web and Mobile Developer, I bring to the table a unique combination of technical proficiency in <b>React</b> and <b>React-Native</b>, along with a commitment to using modern frontend development practices such as <b>Sass</b> for styling and <b>TypeScript</b> for optimal type safety.
                    </p>
                    <p>
                    My aim is to create visually stunning and innovative applications that engage users through dynamic and interactive interfaces, reflecting my unwavering dedication to elevating the user experience.
                    </p>
                    <p>
                    My ultimate goal is to deliver user-centric solutions that not only meet, but exceed the expectations of both clients and end-users alike.
                    </p>
                    <div className="social-links">
                        {About.links.map((link: any, index: number) => {
                            return (
                                <a key={index} target="_blank" href={link.href}><img className="social-icon" src={link.icon} alt={link.alt} width="512" height="512"/></a>
                            )
                        })}
                    </div>
                </div>
                <img className="profile-picture" src="/me.webp" alt="My Profile Picture" width="1000" height="1500" />
            </div>
        </ScrollSectionComponent>
    )
}