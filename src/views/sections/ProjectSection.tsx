import ScrollSectionComponent from "../components/ScrollSectionComponent";

import '../../styles/ProjectSection.scss'
import { Projects } from '../../Data'
import ProjectComponent from "../components/ProjectComponent";

export default function ProjectSection() {

    return (
        <ScrollSectionComponent id="projects">
            <div className="projects">
                <h1 className="background-text title">Projects</h1>
                {Projects.map((project: any, index: number) => {
                    return (
                        <ProjectComponent project={project}/>
                    )
                })}
            </div>
        </ScrollSectionComponent>
    )
}