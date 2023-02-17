import axios from "axios"
import { forwardRef, useRef, useState } from "react"
import { FormDataToObject, MergeRefs } from "../../Utility"

export const FormComponent = forwardRef((props: any, ref: any) => {

    const [success, setSuccess] = useState<boolean>(false)
    const [waitingForResponse, setWaitingForResponse] = useState<boolean>(false)
    const [responseMessage, setResponseMessage] = useState<string>()

    const formRef = useRef<HTMLFormElement>(null)
    const {
        className
    } = props

    function OnSubmit(e: any) {
        e.preventDefault()
        if(!formRef.current || waitingForResponse) return

        setWaitingForResponse(true)

        const formData = new FormData(formRef.current)
        const data = FormDataToObject(formData)

        axios.post("http://localhost:4000/contactme", data)
        .then(res => {
            setResponseMessage(res.data.message)

            setTimeout(() => {
                setSuccess(res.data.success)
            }, 300)
            setTimeout(() => {
                setSuccess(false)
                setWaitingForResponse(false)
            }, 2800)
        })
        .catch(err => {
            console.log(`Form Post Error :: ${err}`)
            setTimeout(() => {
                setSuccess(false)
                setWaitingForResponse(false)
            }, 2500)
        })
    }

    return (
        <form className={`form ${className}`} onSubmit={OnSubmit} ref={MergeRefs([formRef, ref])}>
            {props.children}
            <div className={`overlay ${waitingForResponse ? (success ? "playSuccess":""):""}`}>
                <svg viewBox="0 0 650 650">
                    <polyline className="checkmark" points="0 358.93 206.05 547.97 462.82 0"/>
                </svg>
            </div>
            <span>{responseMessage}</span>
        </form>
    )
})