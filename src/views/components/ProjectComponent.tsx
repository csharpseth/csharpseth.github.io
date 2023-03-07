/** @format */

import { useContext, useEffect, useRef, useState } from 'react'
import { DisplayContext } from '../../contexts/DisplayContext'
import { Link } from '../components/UtilityComponents'
import { useIntersect } from '../../hooks/VisibilityHooks'
import { Clamp, Clamp01, RemapPercent, SlopeToAngle } from '../../MyMath'
import { LinkButtonComponent } from './Buttons'
import { API_MEDIA_URL } from '../../config/Config'

export default function ProjectComponent(props: any) {
	const {
		mouseX,
		mouseY,
		windowWidth,
		windowHeight,
		scrollPercent,
		container,
		isMobile,
	} = useContext(DisplayContext)
	const mediaRef = useRef<HTMLDivElement>(null)

	const projectRef = useRef<HTMLDivElement>(null)
	const visibility = useIntersect(projectRef)

	function ResetMediaTransform() {
		if (!mediaRef.current) return

		mediaRef.current.style.setProperty('--mouseX', `${0}`)
		mediaRef.current.style.setProperty('--mouseY', `${0}`)
		mediaRef.current.style.setProperty('--lightAngle', `0deg`)
	}

	useEffect(() => {
		if (!mediaRef.current) return

		function HandleMouseMove(event: any) {
			if (!mediaRef.current) return

			const xPercent = event.offsetX / mediaRef.current.offsetWidth
			const yPercent = event.offsetY / mediaRef.current.offsetHeight

			// mediaRef.current.setAttribute("style",
			//     `
			//     transition: transform 200ms linear;
			//     transform:
			//         rotateY(${-15 + (30*(1 - xPercent))}deg)
			//         rotateX(${-15+(30*yPercent)}deg);
			//     filter: drop-shadow(${-16 + (32 * (1-xPercent))}px ${-12 + (24 * (1-yPercent))}px 24px #000)
			//     `
			// )

			const centralY = RemapPercent(yPercent, -1, 1)
			const centralX = RemapPercent(xPercent, -1, 1)

			mediaRef.current.style.setProperty('--mouseX', `${centralX}`)
			mediaRef.current.style.setProperty('--mouseY', `${centralY}`)
			let angle = SlopeToAngle(centralX, centralY)

			mediaRef.current.style.setProperty(
				'--lightAngle',
				`${angle - 90}deg`
			)
		}

		mediaRef.current.addEventListener('mousemove', HandleMouseMove)

		return () => {
			mediaRef.current?.removeEventListener('mousemove', HandleMouseMove)
		}
	}, [mouseX, mouseY])

	useEffect(() => {
		if (!projectRef.current) return
		projectRef.current.style.setProperty('--visibility', `${visibility}`)
	}, [visibility, projectRef])

	return (
		<div
			className={`project-item ${props.className ? props.className : ''}`}
			id={props.id}
			ref={projectRef}
		>
			<div
				className="media"
				ref={mediaRef}
				onMouseLeave={ResetMediaTransform}
			>
				<img
					className="background-img"
					src={`${props.coverImageURL}`}
					alt=""
				/>
				{props.isMobile ? (
					''
				) : (
					<video
						className="background-gif"
						src={`${props.coverVideoURL}`}
						autoPlay
						loop
						muted
					/>
				)}
			</div>

			<div className="info">
				<h2>{props.project.title}</h2>
				<p>{props.project.previewText}</p>
				<div className="links">
					{props.project.demoLink ? (
						<LinkButtonComponent href={props.project.demoLink}>
							Demo
						</LinkButtonComponent>
					) : (
						''
					)}
					{props.project.pageLink ? (
						<LinkButtonComponent link={props.project.pageLink}>
							More Info
						</LinkButtonComponent>
					) : (
						''
					)}
					{props.project.sourceLink ? (
						<LinkButtonComponent href={props.project.sourceLink}>
							GitHub
						</LinkButtonComponent>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}
