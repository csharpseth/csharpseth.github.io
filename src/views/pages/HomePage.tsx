import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";

import "../../styles/HomePage.scss"
import ReadProgressBar from '../components/fx/ReadProgressBar';
import { HalfPageSpacerComponent, QuarterPageSpacerComponent } from '../components/PageSpacerComponent';
import ContactSection from "../sections/ContactSection";

export default function HomePage(props: any) {

    return (
        <>
            <AboutSection />
            <HalfPageSpacerComponent />
            <ProjectSection />
            <HalfPageSpacerComponent />
            <ContactSection />
            <QuarterPageSpacerComponent />
            <ReadProgressBar />
        </>
    )
}