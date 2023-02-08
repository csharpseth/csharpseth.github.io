import { useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"

export function Link(props: any) {
    let element: HTMLDivElement
    let container: HTMLDivElement

    const { SetSuspendedHash, Navigate } = useContext(NavigationContext)

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
        
        if(!container) {
            container = document.querySelector(`.container`) as HTMLDivElement
        }

        if(!element) {
            element = document.querySelector(`#${props.to}`) as HTMLDivElement
        }
        
        container.scrollTo({
            top: element.offsetTop,
            behavior: props.behaviour ? props.behaviour : "smooth"
        })
    }

    function Link() {
        if(!props.link) return
        console.log('Nav to link')
        Navigate(props.link)
    }

    return (
        <a href={`#${props.to}`} onClick={OnClick}>
            {props.children}
        </a>
    )

}