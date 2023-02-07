import { useEffect } from "react"

export function Link(props: any) {
    let element: HTMLDivElement
    let container: HTMLDivElement

    useEffect(() => {
        container = document.querySelector(`.container`) as HTMLDivElement
        if(props.to) {
            element = document.querySelector(`#${props.to}`) as HTMLDivElement
        }
    }, [])

    function OnClick(event: any) {
        event.preventDefault()

        if(!element) return
        console.log('Scroll')
        window.history.pushState({ page: props.to }, props.to.toUpperCase(), `#${props.to}`)

        container.scrollTo({
            top: element.offsetTop,
            behavior: props.behaviour ? props.behaviour : "smooth"
        })

        if(props.onClick) props.onClick()
    }

    return (
        <a href={`#${props.to}`} onClick={OnClick}>
            {props.children}
        </a>
    )

}