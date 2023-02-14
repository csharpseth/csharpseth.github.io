import ScrollSectionComponent from "../components/ScrollSectionComponent";
import '../../styles/ContactSection.scss'
import { useState, useRef, useContext } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";

export default function ContactSection() {

    const [copied, setCopied] = useState<boolean>(false)
    const [sent, setSent] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null)
    
    const { isMobile } = useContext(DisplayContext)

    function CopyEmailToClipboard(e: any) {
        if(isMobile) {
            window.location.href = "mailto:csharpseth@gmail.com"
            return
        }

        navigator.clipboard.writeText("csharpseth@gmail.com")
        setCopied(true)
    }

    function SubmitForm(e: any) {
        if(!formRef.current) return
        if(!sent) {
            setSent(true)
            setTimeout(() => setSent(false), 1500)
        }
        //formRef.current.submit()
    }

    return (
        <ScrollSectionComponent id="contact">
            <div className="contact-wrapper">
                <h1 className="background-text">Contact Me</h1>
                <div className="email" onClick={CopyEmailToClipboard} onMouseLeave={() => setCopied(false)}>
                    <h1>csharpseth@gmail.com</h1>
                    <div className="copy-indicator">
                        <img src={`/icon_${isMobile ? "goto":"clipboard"}.png`} alt="clipboard" />
                        <span id={copied ? 'active':''}>Copied!</span>
                    </div>
                </div>
                <span className="background-text">Or</span>
                <form className="contact-form" action="" method="" ref={formRef}>
                    <div className="horizontal">

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        title="Enter your first name."
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="First Name"
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        title="Enter your last name."
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Last Name"
                    />

                    </div>
                    
                    <div className="horizontal">
                    
                    <label htmlFor="email">Email</label>
                    <input
                        title="Enter your email address."
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                    />
                    </div>

                    <label htmlFor="message">Message</label>
                    <div className="textArea-wrapper">
                        <textarea
                            title="Write me a brief message."
                            id="message"
                            name="message"
                            required 
                            placeholder="Message..."
                            rows={4}
                        ></textarea>
                    </div>

                    <button type="button" className={`submit-wrapper ${sent ? 'sent':''}`} onClick={SubmitForm}>
                        <span>Send</span>
                        <img src="/icon-send.png" alt="" />
                    </button>
                </form>

            </div>
        </ScrollSectionComponent>
    )
}