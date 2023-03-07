/** @format */

import { useState } from 'react'

import '../../styles/TextArea.scss'

export default function TextAreaComponent(props: any) {
	const [focus, setFocus] = useState<boolean>(false)

	const {
		title,
		name,
		id,
		className,
		rows = 2,
		required,
		placeholder,
		label,
	} = props

	return (
		<div
			className={`textArea-wrapper ${className ? className : ''} ${
				focus ? 'focus' : ''
			}`}
		>
			<label htmlFor={name}>{label}</label>
			<textarea
				title={title ? title : ''}
				id={id ? id : ''}
				name={name ? name : ''}
				required={required}
				placeholder={placeholder ? placeholder : ''}
				rows={rows ? rows : ''}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			></textarea>
		</div>
	)
}
