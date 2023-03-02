import "../../styles/ProjectPreviewComponent.scss"
import { LinkButtonComponent } from "./Buttons"

export default function ProjectPreviewComponent(props: any) {
    return (
        <li className="project-preview">
            <div className="media">
                <img className="cover-image" src="/triva.webp" alt="" />
            </div>
            <div className="info">
                <div className="text">
                    <h1 className="title">Triva</h1>
                    <span className="client">Personal Project</span>
                    <p className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae veritatis nihil, maiores dignissimos odit maxime nam neque laudantium consequatur quidem perspiciatis, illum eius aliquam vitae, numquam qui iure architecto fugit.
                    </p>
                </div>
                <ul className="tools">
                    <li className="tool">
                        <span className="title">NodeJS</span>
                        <img className="color" src="/tool-logo-node-color.png" alt="" />
                        <img className="white" src="/tool-logo-node-white.png" alt="" />
                    </li>
                    <li className="tool">
                        <span className="title">ReactJS</span>
                        <img className="color" src="/tool-logo-react-color.png" alt="" />
                        <img className="white" src="/tool-logo-react-white.png" alt="" />
                    </li>
                    <li className="tool">
                        <span className="title">TypeScript</span>
                        <img className="color" src="/tool-logo-typescript-color.png" alt="" />
                        <img className="white" src="/tool-logo-typescript-white.png" alt="" />
                    </li>
                    <li className="tool">
                        <span className="title">Sass</span>
                        <img className="color" src="/tool-logo-sass-color.png" alt="" />
                        <img className="white" src="/tool-logo-sass-white.png" alt="" />
                    </li>
                </ul>
            </div>
            <LinkButtonComponent>View Project</LinkButtonComponent>
        </li>
    )
}