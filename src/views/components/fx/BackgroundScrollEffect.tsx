/** @format */

import { useContext, useEffect, useRef } from 'react'
import { DisplayContext } from '../../../contexts/DisplayContext'
import { CubeRootFunction } from '../../../MyMath'

import '../../../styles/BackgroundScrollEffect.scss'

export default function BackgroundScrollEffect() {
	const {
		scrollPercent,
		windowHeight,
		windowWidth,
		mouseX,
		mouseY,
		container,
	} = useContext(DisplayContext)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!containerRef.current) return

		containerRef.current.style.setProperty(
			'--scrollPercent',
			`${scrollPercent}`
		)
		containerRef.current.style.setProperty(
			'--opacity',
			`${CubeRootFunction(scrollPercent, 1.6, -0.1, -0.2)}`
		)
		containerRef.current.style.setProperty(
			'--blur',
			`${CubeRootFunction(scrollPercent, 1.8, -0.25, -0.2)}`
		)
	}, [scrollPercent, containerRef])

	useEffect(() => {
		if (!containerRef.current || !container.current) return

		containerRef.current.style.setProperty(
			'--scrollHeight',
			`${container.current.scrollHeight}px`
		)
	}, [containerRef])

	function Path() {
		return (
			<path
				className="path"
				d="M31.77,1440l42.68-211a522.61,522.61,0,0,0-32-309.84h0a522.65,522.65,0,0,1-5-400.36l9.94-24.84A522.53,522.53,0,0,0,72.8,188.85L31.77,0"
			/>
		)
	}

	return (
		<div className="background-scroll-effect" ref={containerRef}>
			<svg className="container" viewBox="0 0 84.82 1440">
				<Path />
				<Path />
				<Path />
			</svg>
		</div>
	)
}
