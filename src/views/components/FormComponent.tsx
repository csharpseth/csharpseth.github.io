import { forwardRef, useRef } from "react"
import { MergeRefs } from "../../Utility"

export const FormComponent = forwardRef((props: any, ref: any) => {

    const formRef = useRef<HTMLFormElement>(null)
    const {
        className
    } = props

    function OnSubmit(e: any) {
        e.preventDefault()

        console.log("Submit!")
    }

    return (
        <form className={`form ${className}`} onSubmit={OnSubmit} ref={MergeRefs([formRef, ref])}>
            {props.children}
        </form>
    )
})