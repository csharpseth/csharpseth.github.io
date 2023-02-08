import NavbarComponent from './NavbarComponent';

import { NavigationProvider, Route } from "../../contexts/NavigationContext";
import HomePage from '../pages/HomePage';
import SentimentRecognitionPage from '../pages/projects/SentimentRecognitionPage';
import DistanceSorterPage from '../pages/projects/DistanceSorterPage';
import TrivaPage from '../pages/projects/TrivaPage';
import TotoPage from '../pages/projects/TotoPage';

export default function RouterComponent(props: any) {

    return (
        <NavigationProvider>
			<NavbarComponent />
			<Route path="/">
                <HomePage />
            </Route>
            <Route path="/ai-sentiment-recognition">
                <SentimentRecognitionPage />
            </Route>
            <Route path="/distance-sorter">
                <DistanceSorterPage />
            </Route>
            <Route path="/triva">
                <TrivaPage />
            </Route>
            <Route path="/toto">
                <TotoPage />
            </Route>
        </NavigationProvider>
    )
}