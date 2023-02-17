import ScrollSectionComponent from "./ScrollSectionComponent";
import "../../styles/Main.scss"
import "../../styles/ProjectPage.scss"
import ContainerComponent from "./ContainerComponent";

export default function ProjectPageComponent(props: any) {
    return(
        <ContainerComponent>
            <ScrollSectionComponent>
                <div className="project-wrapper">
                    {props.children}
                </div>
            </ScrollSectionComponent>
        </ContainerComponent>
    )
}