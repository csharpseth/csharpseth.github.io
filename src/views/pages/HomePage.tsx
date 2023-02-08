import { useContext, useEffect } from 'react';

import { NavigationContext } from "../../contexts/NavigationContext";

import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";

export default function HomePage(props: any) {

    const { ExecuteSuspendedHash } = useContext(NavigationContext)

    useEffect(() => {
        ExecuteSuspendedHash()
    }, [ExecuteSuspendedHash])

    return (
        <>
            <AboutSection />
            <ProjectSection />
        </>
    )
}