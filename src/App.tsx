import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import './styles/Main.scss';
import AboutSection from './views/AboutSection';
import ExperienceSection from './views/ExperienceSection';
import ProjectSection from './views/ProjectSection';

function App() {
	return (
		<div className="container">
			<NavbarComponent />
			<AboutSection />
			<ProjectSection />
			<ExperienceSection />
		</div>
	)
}

export default App;
