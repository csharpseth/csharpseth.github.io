import NavbarComponent from './NavbarComponent';

import { Route } from "../../contexts/NavigationContext";
import HomePage from '../pages/HomePage';
import SentimentRecognitionPage from '../pages/projects/SentimentRecognitionPage';
import DistanceSorterPage from '../pages/projects/DistanceSorterPage';
import ProjectsPage from '../pages/ProjectsPage';

export default function RouterComponent() {

    return (
        <>
			<NavbarComponent />
			<Route path="/">
                <HomePage />
            </Route>
			<Route path="/projects">
                <ProjectsPage />
            </Route>
            <Route path="/ai-sentiment-recognition">
                <SentimentRecognitionPage />
            </Route>
            <Route path="/distance-sorter">
                <DistanceSorterPage />
            </Route>
        </>
    )
}