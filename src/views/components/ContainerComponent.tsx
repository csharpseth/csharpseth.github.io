/** @format */

import { useContext, useEffect, useRef } from 'react'
import { DisplayContext } from '../../contexts/DisplayContext'
import ReadProgressBar from './fx/ReadProgressBar'

export default function ContainerComponent(props: any) {
	const containerRef = useRef(null)
	const { UpdateContainer } = useContext(DisplayContext)

	useEffect(() => {
		if (!containerRef.current) return
		UpdateContainer()
	}, [containerRef])

	return (
		<div className="container" ref={containerRef}>
			{props.children}
		</div>
	)
}
