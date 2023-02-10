import { useContext, useEffect } from 'react';

import { NavigationContext } from "../../contexts/NavigationContext";

import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";

export default function HomePage(props: any) {

    const { ExecuteSuspendedHash } = useContext(NavigationContext)

    useEffect(() => {
        ExecuteSuspendedHash()
    }, [])

    return (
        <>
            <AboutSection />
            <ProjectSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
        </>
    )
}