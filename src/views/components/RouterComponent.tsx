import { lazy } from 'react';
import { NoRoute, Route } from '../../contexts/NavigationContext';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const SentimentRecognitionPage = lazy(
	() => import('../pages/projects/SentimentRecognitionPage')
);

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
			<NoRoute redirectUrl="/"></NoRoute>
		</>
	);
}
