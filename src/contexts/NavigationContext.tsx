/** @format */

import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { DisplayContext } from './DisplayContext';

export const NavigationContext = createContext({} as any);

export function NavigationProvider(props: any) {
	const [currentPath, setCurrentPath] = useState<string>('/');
	const [transitioning, setTransitioning] = useState<boolean>(false);
	const [routeFound, setRouteFound] = useState<boolean>(false);

	const { ScrollToTop } = useContext(DisplayContext);

	const overallTransitionTime = 1600;

	let changePage: any;
	let endTransition: any;

	function SetURL(href: string, addToHistory: boolean = false) {
		// if(addToHistory) {
		//     window.history.pushState("", "", `${href}`)
		// } else {
		//     window.history.replaceState("", "", `${href}`)
		// }
	}

	function ClearURL() {
		window.history.replaceState('', '', '/');
	}

	function Redirect(to: string) {
		if (currentPath === to) {
			ScrollToTop();
			return;
		}

		ClearRouteFound();
		ClearURL();
		setCurrentPath(to);
	}

	function Navigate(to: string) {
		if (currentPath === to) {
			ScrollToTop();
			return;
		}

		if (transitioning === true) {
			clearTimeout(changePage);
			clearTimeout(endTransition);
		}

		setTransitioning(true);
		changePage = setTimeout(() => {
			ClearRouteFound();
			SetURL(to);
			setCurrentPath(to);
		}, overallTransitionTime / 2);
		endTransition = setTimeout(() => {
			setTransitioning(false);
		}, overallTransitionTime);
	}

	function RouteFound() {
		setRouteFound(true);
	}

	function ClearRouteFound() {
		setRouteFound(false);
	}

	useLayoutEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<NavigationContext.Provider
			value={{
				Navigate,
				RouteFound,
				ClearRouteFound,
				Redirect,
				transitioning,
				currentPath,
				routeFound,
			}}
		>
			{props.children}
		</NavigationContext.Provider>
	);
}

export function Route(props: any) {
	const { currentPath, RouteFound } = useContext(NavigationContext);

	useEffect(() => {
		if (currentPath !== props.path) return;

		RouteFound();
	}, [currentPath, RouteFound, props.path]);

	if (currentPath !== props.path) {
		return <></>;
	}

	return props.children;
}

export function NoRoute(props: any) {
	const { routeFound, Redirect } = useContext(NavigationContext);

	useEffect(() => {
		if (routeFound === true) return;

		Redirect(props.redirectUrl);
	}, [Redirect, props.redirectUrl, routeFound]);

	if (routeFound === true) {
		return <></>;
	}

	return <>{props.children}</>;
}
