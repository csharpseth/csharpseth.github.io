import SectionComponent from "../components/SectionComponent";

import '../styles/Projects.scss'
import { Projects } from '../Data'
import CarouselComponent from "../components/CarouselComponent";

function Project(props: any) {

    const { title, body, backgroundGif, backgroundImg, projectLink, liveLink } = props

    return (
        <div className="project">
            <img className="background-img" src={backgroundImg} alt="" width="640" height="900" />
            <video className="background-gif" src={backgroundGif} autoPlay loop muted width="640" height="900" />
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="links">
                {liveLink ? 
                <a target="_blank" rel="noopener noreferer" href={liveLink}>Use It</a>
                :''}
                {projectLink ?
                <a target="_blank" rel="noopener noreferer" href={projectLink}>GitHub</a>    
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
                                title={project.title}
                                body={project.body}
                                backgroundImg={project.backgroundImg}
                                backgroundGif={project.backgroundGif}
                                projectLink={project.link}
                                liveLink={project.liveLink}
                            />
                        )
                    })}
                </CarouselComponent>
            </div>
        </SectionComponent>
    )
}