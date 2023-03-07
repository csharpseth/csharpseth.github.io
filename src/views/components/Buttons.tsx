/** @format */

import '../../styles/ButtonComponent.scss'
import { Link } from './UtilityComponents'
import { forwardRef } from 'react'

export const LinkButtonComponent = forwardRef((props: any, ref: any) => {
	return (
		<Link
			ref={ref}
			id={props.id}
			className={`button link-button ${
				props.className ? props.className : ''
			}`}
			link={props.link}
			href={props.href}
			onClick={props.onClick}
		>
			{props.children}
		</Link>
	)
})

export const ButtonComponent = forwardRef((props: any, ref: any) => {
	return (
		<button
			ref={ref}
			type={props.type ? props.type : 'button'}
			id={props.id}
			className={`button ${props.className ? props.className : ''}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
})
