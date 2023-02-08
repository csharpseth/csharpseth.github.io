import { useContext, useRef } from "react";
import { useIntersect } from "../../hooks/VisibilityHooks";
import { NavigationContext } from "../../contexts/NavigationContext";


export default function SectionComponent(props: any) {
    const sectionRef = useRef(null)
    const onScreen = useIntersect(sectionRef)
    const { Navigate } = useContext(NavigationContext)

    if(onScreen && props.id) {
        Navigate(`#${props.id}`)
    }

    return (
        <section id={props.id} ref={sectionRef}>
            <div className="content">
                {props.children}
            </div>
        </section>
    )
}