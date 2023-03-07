/** @format */

import { useState } from 'react'
import '../../styles/HamburgerButton.scss'

export default function HamburgerButtonComponent(props: any) {
	const [internalValue, setInternalValue] = useState(false)

	function OnClick() {
		if (props.onChange) {
			if (props.value === undefined) props.onChange(!internalValue)
			else props.onChange(!props.value)
		}
		if (props.value === undefined) setInternalValue(!internalValue)
		else setInternalValue(false)
	}

	return (
		<button
			className="hamburgerButtonContainer"
			id={internalValue || props.value ? 'open' : ''}
			onClick={OnClick}
		>
			<svg className="buttonArea" viewBox="0 0 100 100">
				<rect
					className="line top"
					width="90"
					height="20"
					x="5"
					y="5"
					rx="10"
				></rect>
				<rect
					className="line middle"
					width="90"
					height="20"
					x="5"
					y="40"
					rx="10"
				></rect>
				<rect
					className="line bottom"
					width="90"
					height="20"
					x="5"
					y="75"
					rx="10"
				></rect>
			</svg>
		</button>
	)
}
