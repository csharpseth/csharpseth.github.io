import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";

import "../../styles/HomePage.scss"
import ReadProgressBar from '../components/fx/ReadProgressBar';
import { PageSpacerComponent } from '../components/PageSpacerComponent';

export default function HomePage(props: any) {

    return (
        <>
            <AboutSection />
            <PageSpacerComponent />
            <ProjectSection />
            <PageSpacerComponent />
        </>
    )
}