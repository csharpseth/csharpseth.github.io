/** @format */

import ScrollSectionComponent from '../components/ScrollSectionComponent'
import '../../styles/ContactSection.scss'
import { useState, useRef, useContext, useEffect } from 'react'
import { DisplayContext } from '../../contexts/DisplayContext'
import TextAreaComponent from '../components/TextAreaComponent'
import { ButtonComponent } from '../components/Buttons'
import { useIntersect } from '../../hooks/VisibilityHooks'
import { TextInputComponent } from '../components/Inputs'
import { FormComponent } from '../components/FormComponent'

export default function ContactSection() {
	const [copied, setCopied] = useState<boolean>(false)
	const [sent, setSent] = useState<boolean>(false)
	const sectionRef = useRef<HTMLDivElement>(null)
	const formRef = useRef<HTMLFormElement>(null)
	const submitButtonRef = useRef<HTMLButtonElement>(null)

	const visibility = useIntersect(formRef)

	const { isMobile } = useContext(DisplayContext)

	useEffect(() => {
		if (!sectionRef.current) return
		sectionRef.current.style.setProperty('--visibility', `${visibility}`)
	}, [visibility, sectionRef])

	function CopyEmailToClipboard(e: any) {
		if (isMobile) {
			window.location.href = 'mailto:csharpseth@gmail.com'
			return
		}

		navigator.clipboard.writeText('csharpseth@gmail.com')
		setCopied(true)
	}

	function OnSubmitForm(e: any) {
		if (submitButtonRef.current) {
			submitButtonRef.current.blur()
		}
		if (!sent) {
			setSent(true)
			setTimeout(() => setSent(false), 1500)
		}
	}

	return (
		<ScrollSectionComponent id="contact">
			<div className="contact-wrapper" ref={sectionRef}>
				<h1 className="background-text">Contact Me</h1>
				<div
					className="email"
					onClick={CopyEmailToClipboard}
					onMouseLeave={() => setCopied(false)}
				>
					<h1>csharpseth@gmail.com</h1>
					<div className="copy-indicator">
						<img
							src={`/icon_${isMobile ? 'goto' : 'clipboard'}.png`}
							alt="clipboard"
						/>
						<span id={copied ? 'active' : ''}>Copied!</span>
					</div>
				</div>
				<span className="background-text">Or</span>
				<FormComponent className="contact-form" ref={formRef}>
					<div className="horizontal">
						<TextInputComponent
							title="Enter your first name."
							id="firstName"
							name="firstName"
							required={true}
							placeholder="First Name"
							label="First Name:"
						/>

						<TextInputComponent
							title="Enter your last name."
							id="lastName"
							name="lastName"
							required={true}
							placeholder="Last Name"
						/>
					</div>

					<div className="horizontal">
						<TextInputComponent
							title="Enter your email address."
							type="email"
							id="email"
							name="email"
							required={true}
							placeholder="Email"
						/>
					</div>

					<TextAreaComponent
						label="Message:"
						title="Write Seth a brief message."
						id="message"
						name="message"
						placeholder="Write a brief message..."
						rows={4}
					/>
					<ButtonComponent
						type="submit"
						ref={submitButtonRef}
						className={`submit-wrapper ${sent ? 'sent' : ''}`}
						onClick={OnSubmitForm}
					>
						<span>Send</span>
						<img src="/icon-send.png" alt="" />
					</ButtonComponent>
				</FormComponent>
			</div>
		</ScrollSectionComponent>
	)
}
