/** @format */

import { forwardRef, useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { DisplayContext } from '../../contexts/DisplayContext';
import { NavigationContext } from '../../contexts/NavigationContext';

export const Link = forwardRef((props: any, ref: any) => {
	const element = useRef<HTMLDivElement | null>();

	const { container } = useContext(DisplayContext);
	const { SetSuspendedHash, Navigate } = useContext(NavigationContext);

	useEffect(() => {
		element.current = ReactDOM.findDOMNode(
			document.querySelector(`#${props.to}`)
		) as HTMLDivElement;
	}, [props.to]);

	function OnClick(event: any) {
		if (props.href) {
			return;
		}
		event.preventDefault();

		if (props.onClick) props.onClick();

		if (props.to && props.link) {
			SetSuspendedHash(props.link, props.to, To);
		} else if (props.to && !props.link) {
			To();
		}

		if (props.link && !props.to) Link();
	}

	function To() {
		if (!props.to) return;

		container.current?.scrollTo({
			top: element.current?.offsetTop,
			behavior: 'smooth',
		});
	}

	function Link() {
		if (!props.link) return;
		Navigate(props.link);
	}

	return (
		<a
			ref={ref}
			id={props.id}
			className={props.className}
			href={props.href ? props.href : `#${props.to}`}
			onClick={OnClick}
			target="_blank"
			rel="noreferer noreferrer"
		>
			{props.children}
		</a>
	);
});
