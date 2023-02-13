import ScrollSectionComponent from "../components/ScrollSectionComponent";

import { About } from '../../Data'
import '../../styles/About.scss'
import { useContext } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";
import { RelativeRemap } from "../../MyMath";

export default function AboutSection() {

    const { scrollPercent, mouseX, mouseY, windowWidth, windowHeight } = useContext(DisplayContext)

    return (
        <ScrollSectionComponent id="about">
            <div className="profile" style={{
                opacity: (1 - RelativeRemap(scrollPercent, 0.05, 0.15))
            }}>
                <img className="profile__img" src="/me.webp" alt="profile picture"/>
                <div className="info">
                    <h1>{About.title}</h1>
                    <div className="bio">
                        <p>
                        A passionate Frontend <b>Web</b> and <b>Mobile</b> Developer, I bring a unique combination of technical proficiency in <b>React</b> and <b>React-Native</b>, along with a deep commitment to utilizing modern frontend development practices such as incorporating <b>Sass</b> for styling and <b>TypeScript</b> for optimal type safety.
                        </p>
                    </div>
                </div>

                <div className="links" style={{
                    opacity: (1 - RelativeRemap(scrollPercent, 0, 0.2))
                }}>
                    <a className="link" href="#">
                        <img className="icon" src="/linkedin.png" alt="" />
                    </a>
                    <a className="link" href="#">
                        <img className="icon" src="/github.png" alt="" />
                    </a>
                    <a className="link" href="#">
                        <img className="icon" src="/twitter.png" alt="" />
                    </a>
                    <a className="link" href="#">
                        <img className="icon" src="/youtube.png" alt="" />
                    </a>
                </div>
            </div>
        </ScrollSectionComponent>
    )
}