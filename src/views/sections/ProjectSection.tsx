import ScrollSectionComponent from "../components/ScrollSectionComponent";

import '../../styles/ProjectSection.scss'
import { Projects } from '../../Data'
import ProjectComponent from "../components/ProjectComponent";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSection() {

    const [projects, setProjects] = useState<[]>([])

    async function GetData() {
        const res = await axios.get("http://csharpseth.com:4000/projects/showcased")
        console.log(res.data)
        if(res.data.success === false) return

        setProjects(res.data.projects)
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <ScrollSectionComponent id="projects">
            <div className="projects">
                <h1 className="background-text title">Projects</h1>
                {projects.map((project: any, index: number) => {
                    return (
                        <ProjectComponent key={index} project={project}/>
                    )
                })}
            </div>
        </ScrollSectionComponent>
    )
}