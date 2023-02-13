import { useContext, useEffect, useRef, useState } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";
import { Link } from "../components/UtilityComponents";
import { useIntersect } from "../../hooks/VisibilityHooks";
import { Clamp, Clamp01, RemapPercent, SlopeToAngle } from "../../MyMath";

export default function ProjectComponent(props: any) {
    const { mouseX, mouseY, windowWidth, windowHeight, scrollPercent, container, isMobile } = useContext(DisplayContext)
    const mediaRef = useRef<HTMLDivElement>(null)

    const projectRef = useRef<HTMLDivElement>(null)

    function ResetMediaTransform() {
        if(!mediaRef.current) return

        mediaRef.current.style.setProperty('--mouseX', `${0}`)
        mediaRef.current.style.setProperty('--mouseY', `${0}`)
        mediaRef.current.style.setProperty('--lightAngle', `0deg`)
    }

    useEffect(() => {
        if(!mediaRef.current) return

        function HandleMouseMove(event: any) {
            if(!mediaRef.current) return

            const xPercent = event.offsetX / mediaRef.current.offsetWidth
            const yPercent = event.offsetY / mediaRef.current.offsetHeight
    
            // mediaRef.current.setAttribute("style",
            //     `
            //     transition: transform 200ms linear;
            //     transform:
            //         rotateY(${-15 + (30*(1 - xPercent))}deg)
            //         rotateX(${-15+(30*yPercent)}deg);
            //     filter: drop-shadow(${-16 + (32 * (1-xPercent))}px ${-12 + (24 * (1-yPercent))}px 24px #000)
            //     `
            // )
            
            
            const centralY = RemapPercent(yPercent, -1, 1)
            const centralX = RemapPercent(xPercent, -1, 1)
            
            mediaRef.current.style.setProperty('--mouseX', `${centralX}`)
            mediaRef.current.style.setProperty('--mouseY', `${centralY}`)
            let angle = SlopeToAngle(centralX, centralY)

            mediaRef.current.style.setProperty('--lightAngle', `${(angle-90)}deg`)
        }

        mediaRef.current.addEventListener("mousemove", HandleMouseMove)

        return () => {
            mediaRef.current?.removeEventListener("mousemove", HandleMouseMove)
        }
    }, [mouseX, mouseY])

    useEffect(() => {
        if(!projectRef.current || !container.current) return

        const c = container.current as HTMLDivElement
        const scrollBottom = c.scrollTop + windowHeight
        const offsetTop = projectRef.current.offsetTop - (windowHeight/2)
        const height = projectRef.current.offsetHeight

        let v = 0
        if(isMobile) {
            v = Clamp(scrollBottom-(offsetTop+(height/2)), 0, height) / height
        } else {
            v = Clamp(scrollBottom-(offsetTop+height), 0, height) / height
        }

        projectRef.current.style.setProperty("--visibility", `${v}`)


    }, [scrollPercent, projectRef])

    return (
        <div
            className={`project-item ${props.className ? props.className:''}`}
            id={props.id}
            ref={projectRef}
        >

            <div className="media" ref={mediaRef} onMouseLeave={ResetMediaTransform}>
                <img className="background-img" src={props.project.backgroundImg} alt=""/>
                {props.isMobile ? '' : <video className="background-gif" src={props.project.backgroundGif} autoPlay loop muted />}
            </div>

            <div className="info">
                <h2>{props.project.title}</h2>
                <p>{props.project.body}</p>
                <div className="links">
                    {props.project.demoLink ? 
                    <a className="link-button" target="_blank" rel="noreferer" href={props.project.demoLink}>Demo</a>
                    :''}
                    {props.project.pageLink ?
                    <Link className="link-button" link={props.project.pageLink}>More Info</Link>    
                    :''}
                    {props.project.sourceLink ?
                    <a className="link-button" target="_blank" rel="noreferer" href={props.project.sourceLink}>GitHub</a>    
                    :''}
                </div>
            </div>


        </div>
    )
}