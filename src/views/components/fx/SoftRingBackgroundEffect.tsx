/** @format */

import React, { useContext, useState } from 'react'
import { DisplayContext } from '../../../contexts/DisplayContext'

export default function SoftRingBackgroundEffect() {
	const { scrollPercent, windowHeight, windowWidth, mouseX, mouseY } =
		useContext(DisplayContext)

	function Circle(props: any) {
		return (
			<circle
				className="path"
				cx={
					windowWidth / 2 +
					(-1 + (mouseX / windowWidth) * 2) * props.weight +
					props.xOffset
				}
				cy={
					windowHeight / 2 +
					(-1 + (mouseY / windowHeight) * 2) * props.weight +
					props.yOffset
				}
				r={300}
			/>
		)
	}

	function All(props: any) {
		const xOffset = props.xOffset ? props.xOffset : 0
		const yOffset = props.xOffset ? props.yOffset : 0
		const weight = props.weight ? props.weight : 1

		return (
			<svg
				className="scroll-path"
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${windowWidth} ${windowHeight}`}
			>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={5 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={10 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={20 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={40 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={80 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={80 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={80 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={80 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={80 * weight}
				/>
				<Circle
					xOffset={xOffset}
					yOffset={yOffset}
					weight={80 * weight}
				/>
			</svg>
		)
	}

	return (
		<div className="SoftRingBackground">
			<All weight={0.3} />
			<All weight={0.1} />
			<All weight={0.2} />
		</div>
	)
}
