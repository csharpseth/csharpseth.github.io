/** @format */

import { useContext, useEffect, useRef, useState } from 'react';
import { DisplayContext } from '../contexts/DisplayContext';
import { Clamp } from '../MyMath';

export function useIntersect(ref: any): number {
	const [amount, setAmount] = useState<number>(0);
	const { container, scrollPercent, windowHeight, isMobile } =
		useContext(DisplayContext);

	useEffect(() => {
		if (!ref.current || !container.current) return;

		const c = container.current as HTMLDivElement;
		const scrollBottom = c.scrollTop + windowHeight;
		const offsetTop = ref.current.offsetTop - windowHeight / 2;
		const height = ref.current.offsetHeight;

		let v = 0;
		if (isMobile) {
			v =
				Clamp(scrollBottom - (offsetTop + height / 2), 0, height) /
				height;
		} else {
			v = Clamp(scrollBottom - (offsetTop + height), 0, height) / height;
		}

		setAmount(v);
	}, [scrollPercent, ref, container, windowHeight, isMobile]);

	return amount;
}

export function useInView(ref: any, threshold: number = 0.6): boolean {
	const [onScreen, setOnScreen] = useState(false);
	const observerRef = useRef<IntersectionObserver>();

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			([entry]) => {
				setOnScreen(entry.isIntersecting);
			},
			{ threshold }
		);
	}, [threshold]);

	useEffect(() => {
		observerRef.current?.observe(ref.current);

		return () => {
			observerRef.current?.disconnect();
		};
	}, [ref]);

	return onScreen;
}
