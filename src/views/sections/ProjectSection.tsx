import SectionComponent from "../components/SectionComponent";

import '../../styles/Projects.scss'
import { Projects } from '../../Data'
import CarouselComponent from "../components/CarouselComponent";
import { useContext } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";
import { Link } from "../components/UtilityComponents";

function Project(props: any) {

    const { title, body, backgroundGif, backgroundImg, sourceLink, liveLink, pageLink } = props
    const { isMobile } = useContext(DisplayContext)

    return (
        <div className="project">
            <img className="background-img" src={backgroundImg} alt="" width="640" height="900" />
            {isMobile ? '' : <video className="background-gif" src={backgroundGif} autoPlay loop muted width="640" height="900" />}
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="links">
                {liveLink ? 
                <a target="_blank" rel="noreferer" href={liveLink}>Use It</a>
                :''}
                {pageLink ?
                <Link link={pageLink}>Project</Link>    
                :''}
                {sourceLink ?
                <a target="_blank" rel="noreferer" href={sourceLink}>GitHub</a>    
                :''}
            </div>
        </div>
    )
}

export default function ProjectSection() {

    return (
        <SectionComponent id="projects">
            <div className="projects">
                <h1>Projects</h1>
                <span>These are some projects I am involved with.</span>
                <CarouselComponent className="carousel">
                    {Projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                body={project.body}
                                backgroundImg={project.backgroundImg}
                                backgroundGif={project.backgroundGif}
                                liveLink={project.liveLink}
                                pageLink={project.pageLink}
                                sourceLink={project.sourceLink}
                            />
                        )
                    })}
                </CarouselComponent>
            </div>
        </SectionComponent>
    )
}