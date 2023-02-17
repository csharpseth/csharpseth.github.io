import { HalfPageSpacerComponent } from '../components/PageSpacerComponent';

import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import ContactSection from "../sections/ContactSection";
import ContainerComponent from "../components/ContainerComponent";

import "../../styles/HomePage.scss"


export default function HomePage(props: any) {

    return (
        <ContainerComponent>
            <AboutSection />
            <HalfPageSpacerComponent />
            <ProjectSection />
            <HalfPageSpacerComponent />
            <ContactSection />
        </ContainerComponent>
    )
}