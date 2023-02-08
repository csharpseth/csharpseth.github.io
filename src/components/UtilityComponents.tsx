import { useEffect } from "react"

export function Link(props: any) {
    let element: HTMLDivElement
    let container: HTMLDivElement

    useEffect(() => {
        
    }, [])

    function OnClick(event: any) {
        event.preventDefault()
        console.log('Hit Link')
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

        if(props.onClick) props.onClick()
        window.history.pushState({ page: props.to }, props.to.toUpperCase(), `#${props.to}`)
    }

    return (
        <a href={`#${props.to}`} onClick={OnClick}>
            {props.children}
        </a>
    )

}