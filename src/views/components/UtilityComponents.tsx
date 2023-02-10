import { useContext, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

import { DisplayContext } from "../../contexts/DisplayContext"
import { NavigationContext } from "../../contexts/NavigationContext"

export function Link(props: any) {
    const element = useRef<HTMLDivElement | null>()
    
    const { container } = useContext(DisplayContext)
    const { SetSuspendedHash, Navigate } = useContext(NavigationContext)

    useEffect(() => {
        element.current = ReactDOM.findDOMNode(document.querySelector(`#${props.to}`)) as HTMLDivElement
    }, [document.querySelector(`#${props.to}`)])

    function OnClick(event: any) {
        event.preventDefault()

        if(props.onClick) props.onClick()

        if(props.to && props.link){
            SetSuspendedHash(props.link, props.to, To)
        }
        else if(props.to && !props.link) {
            To()
        }

        
        if(props.link && !props.to)
            Link()
    }

    function To() {
        if(!props.to) return
        
        container.current?.scrollTo({
            top: element.current?.offsetTop,
            behavior: 'smooth'
        })
    }

    function Link() {
        if(!props.link) return
        console.log('Nav to link')
        Navigate(props.link)
    }

    return (
        <a id={props.id} className={props.className} href={`#${props.to}`} onClick={OnClick}>
            {props.children}
        </a>
    )

}