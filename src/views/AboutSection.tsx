import SectionComponent from "../components/SectionComponent";

import '../styles/About.scss'

export default function AboutSection() {
    return (
        <SectionComponent id="about">
            <div className="profile">
                <div className="info">
                    <h1>Hello! I'm Seth.</h1>
                    <p>A Frontend <b>Web</b> and <b>Mobile</b> Developer with a strong drive to craft innovative and visually stunning applications.</p>
                    <p>I have extensive experience with <b>React</b>, <b>React-Native</b>, <b>Sass</b>, and <b>TypeScript</b>, I have the technical skills to bring designs to life with dynamic and interactive user interfaces.</p>
                    <p>I am committed to using modern frontend development practices, such as incorporating <b>Sass</b> for styling and <b>TypeScript</b> for type safety, to produce high-quality and efficient code. Whether working on web or mobile projects, my ultimate goal is to deliver user-centric experiences that meet the needs of clients and end-users alike.</p>
                    <div className="social-links">
                        <a target="_blank" href="https://www.linkedin.com/in/sethhamm/"><img className="social-icon" src="/linkedin.png" alt="linkedin" width="512" height="512"/></a>
                        <a target="_blank" href="https://github.com/csharpseth"><img className="social-icon" src="/github.png" alt="github" width="512" height="512"/></a>
                        <a target="_blank" href="https://twitter.com/sethiesparkles"><img className="social-icon" src="/twitter.png" alt="twitter" width="512" height="512"/></a>
                        <a target="_blank" href="https://www.youtube.com/@codewithseth"><img className="social-icon" src="/youtube.png" alt="youtube" width="512" height="512"/></a>
                    </div>
                </div>
                <img className="profile-picture" src="/me.webp" alt="My Profile Picture" width="1000" height="1500" />
            </div>
        </SectionComponent>
    )
}