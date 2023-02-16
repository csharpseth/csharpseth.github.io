import ReadProgressBar from "./fx/ReadProgressBar";
import ScrollSectionComponent from "./ScrollSectionComponent";
import "../../styles/Main.scss"
import "../../styles/ProjectPage.scss"

export default function ProjectPageComponent(props: any) {
    return(
        <div className="container">
            <ScrollSectionComponent>
                <div className="project-wrapper">
                    {props.children}
                </div>
            </ScrollSectionComponent>
            
            <ReadProgressBar />
        </div>
    )
}