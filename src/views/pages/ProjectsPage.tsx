import '../../styles/ProjectsPage.scss'
import ContainerComponent from '../components/ContainerComponent'
import ProjectPreviewComponent from '../components/ProjectPreviewComponent'

export default function ProjectsPage() {
    return (
        <ContainerComponent>
            <ul className="projects-list">
                <ProjectPreviewComponent />
            </ul>
        </ContainerComponent>
    )
}