import { NoRoute, Route } from '../../contexts/NavigationContext';
import HomePage from '../pages/HomePage';
import SentimentRecognitionPage from '../pages/projects/SentimentRecognitionPage';
import ProjectsPage from '../pages/ProjectsPage';

export default function RouterComponent() {
	return (
		<>
			<Route path="/">
				<HomePage />
			</Route>
			<Route path="/projects">
				<ProjectsPage />
			</Route>
			<Route path="/ai-sentiment-recognition">
				<SentimentRecognitionPage />
			</Route>
			<NoRoute redirectUrl="/">
				<h1>404</h1>
			</NoRoute>
		</>
	);
}
