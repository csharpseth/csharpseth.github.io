import { API_MEDIA_URL } from "../../config/Config"
import "../../styles/ProjectPreviewComponent.scss"
import { LinkButtonComponent } from "./Buttons"
import ToolsIconComponent from "./ToolsIconComponent"

export default function ProjectPreviewComponent(props: any) {

    const {
        project
    } = props

    return (
        <li className="project-preview">
            <div className="media">
                <img className="cover-image" src={`${API_MEDIA_URL}/${project.coverImageURL}`} alt="" />
                <ToolsIconComponent tools={project.toolsUsed} />
            </div>
            <div className="info">
                <div className="text">
                    <h1 className="title">{project.title}</h1>
                    <span className="client">{project.client}</span>
                    <p className="description">
                        {project.description}
                    </p>
                </div>
            </div>
            <LinkButtonComponent>View Project</LinkButtonComponent>
        </li>
    )
}