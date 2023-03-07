/** @format */

import { forwardRef } from 'react'

export const TextInputComponent = forwardRef((props: any, ref: any) => {
	const {
		title,
		name,
		id,
		className,
		type = 'text',
		required,
		placeholder,
		label,
	} = props

	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				title={title}
				type={type}
				name={name}
				id={id}
				className={className}
				required={required}
				placeholder={placeholder}
			/>
		</>
	)
})
