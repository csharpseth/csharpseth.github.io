import ScrollSectionComponent from "../components/ScrollSectionComponent";

import { About } from '../../Data'
import '../../styles/AboutSection.scss'
import { useContext, useEffect } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";
import { RelativeRemap } from "../../MyMath";

export default function AboutSection() {

    const { scrollPercent, SetLandingPlayed, landingPlayed } = useContext(DisplayContext)

    useEffect(() => {
        setTimeout(SetLandingPlayed, 2000)
    }, [])

    return (
        <ScrollSectionComponent id="about">
            <div className={`profile ${landingPlayed ? "":"play"}`} style={{
                opacity: (1 - RelativeRemap(scrollPercent, 0.05, 0.15))
            }}>
                <img className="profile__img" src="/me.webp" alt="profile"/>
                <div className="info">
                    <h1>{About.title}</h1>
                    <div className="bio">
                        <p>
                        A front-end <b>Web</b> and <b>Mobile</b> developer skilled in <b>React</b>, <b>React-Native</b>, <b>TypeScript</b>, and <b>SASS</b>.
                        </p>
                        <p>
                        I build efficient and responsive user interfaces. My communication skills and ability to collaborate effectively make me a valuable team member for any development project.
                        </p>
                    </div>
                </div>

                <div className="links" style={{
                    opacity: (1 - RelativeRemap(scrollPercent, 0, 0.2))
                }}>
                    <a className="link" href="https://www.linkedin.com/in/sethhamm" target="_blank" rel="noopener noreferrer" >
                        <img className="icon" src="/linkedin.png" alt="" />
                    </a>
                    <a className="link" href="https://github.com/csharpseth" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src="/github.png" alt="" />
                    </a>
                    <a className="link" href="https://twitter.com/sethiesparkles" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src="/twitter.png" alt="" />
                    </a>
                    <a className="link" href="https://www.youtube.com/@codewithseth" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src="/youtube.png" alt="" />
                    </a>
                </div>
            </div>
        </ScrollSectionComponent>
    )
}