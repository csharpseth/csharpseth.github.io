import ScrollSectionComponent from "../components/ScrollSectionComponent";

import '../../styles/ProjectSection.scss'
import { Projects } from '../../Data'
import CarouselComponent from "../components/CarouselComponent";
import { useContext, useRef } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";
import { Link } from "../components/UtilityComponents";
import { useIntersect, useInView } from "../../hooks/VisibilityHooks";
import { Clamp, EaseInOutFunction, Lerp, RootFunction, SineFunction } from "../../MyMath";

function Project(props: any) {

    const { title, body, backgroundGif, backgroundImg, sourceLink, demoLink, pageLink } = props

    return (
        <div className={`project-item ${props.className}`}id={props.id}>
            <img className="background-img" src={backgroundImg} alt=""/>
            {props.isMobile ? '' : <video className="background-gif" src={backgroundGif} autoPlay loop muted />}
            <div className="info">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className="links">
                {demoLink ? 
                <a className="link-button" target="_blank" rel="noreferer" href={demoLink}>Use It</a>
                :''}
                {pageLink ?
                <Link className="link-button" link={pageLink}>Project</Link>    
                :''}
                {sourceLink ?
                <a className="link-button" target="_blank" rel="noreferer" href={sourceLink}>GitHub</a>    
                :''}
            </div>
        </div>
    )
}

export default function ProjectSection() {

    const sectionRef = useRef(null)
    const sectionInView = useInView(sectionRef, 0.3)

    const { isMobile } = useContext(DisplayContext)


    return (
        <ScrollSectionComponent id="projects" ref={sectionRef}>
            <div className="projects-section">
                <div className="header">
                    <h1 className="section-title" id={sectionInView ? "in-view":""}>Projects</h1>
                    <Link className="link-button link-view-all">View All</Link>
                </div>
                <CarouselComponent className="carousel" canScroll={isMobile}>
                    {Projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                body={project.body}
                                backgroundImg={project.backgroundImg}
                                backgroundGif={project.backgroundGif}
                                demoLink={project.demoLink}
                                pageLink={project.pageLink}
                                sourceLink={project.sourceLink}
                                isMobile={isMobile}
                                className={sectionInView ? 'in-view':''}
                                id={sectionInView ? `in-view-${index}`:""}
                            />
                        )
                    })}
                </CarouselComponent>
            </div>
        </ScrollSectionComponent>
    )
}