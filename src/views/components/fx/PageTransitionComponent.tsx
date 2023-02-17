import { useContext } from "react"
import { NavigationContext } from "../../../contexts/NavigationContext"
import "../../../styles/PageTransition.scss"

export default function PageTransitionComponent() {
    const { transitioning } = useContext(NavigationContext)

    return (
        <div className={`page-transition-wrapper ${transitioning ? "play":""}`}>
            <div className="page-transition">
                <span className="element" />
                <span className="element" />
                <span className="element" />
                <span className="element" />
                <span className="element" />
                <span className="element" />
                <span className="element" />
                <span className="element" />
            </div>
        </div>
    )
}