import "../../styles/ProjectPreviewComponent.scss"

export default function ProjectPreviewComponent(props: any) {
    return (
        <li className="project-preview">
            <div className="media">
                <img className="cover-image" src="/triva.webp" alt="" />
            </div>
            <div className="text">
                <h1 className="title">Triva</h1>
                <span className="client">Personal Project</span>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae veritatis nihil, maiores dignissimos odit maxime nam neque laudantium consequatur quidem perspiciatis, illum eius aliquam vitae, numquam qui iure architecto fugit.
                </p>
            </div>
            <ul className="tools">
                <li>React</li>
                <li>TypeScript</li>
                <li>Sass</li>
                <li>Blah</li>
                <li>Blah</li>
            </ul>
        </li>
    )
}