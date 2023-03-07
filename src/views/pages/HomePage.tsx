/** @format */

import { QuarterPageSpacerComponent } from '../components/PageSpacerComponent';

import ContainerComponent from '../components/ContainerComponent';

import '../../styles/HomePage.scss';
//import { lazy } from 'react';
import AboutSection from '../sections/AboutSection';
import ProjectSection from '../sections/ProjectSection';
import ContactSection from '../sections/ContactSection';

// const AboutSection = lazy(() => import('../sections/AboutSection'));
// const ProjectSection = lazy(() => import('../sections/ProjectSection'));
// const ContactSection = lazy(() => import('../sections/ContactSection'));

export default function HomePage(props: any) {
	return (
		<ContainerComponent>
			<AboutSection />
			<QuarterPageSpacerComponent />
			<ProjectSection />
			<QuarterPageSpacerComponent />
			<ContactSection />
		</ContainerComponent>
	);
}
