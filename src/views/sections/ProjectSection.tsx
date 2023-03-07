/** @format */

import ScrollSectionComponent from '../components/ScrollSectionComponent'

import '../../styles/ProjectSection.scss'
import { Projects } from '../../Data'
import ProjectComponent from '../components/ProjectComponent'
import { useEffect, useRef, useState } from 'react'
//import axios from "axios";
import { API_MEDIA_URL } from '../../config/Config'

export default function ProjectSection() {
	const [projects, setProjects] = useState<[]>(Projects as [])

	const mediaAcquired = useRef<boolean>(false)

	// async function GetData() {
	//     axios.get("http://csharpseth.com:4000/projects/showcased")
	//     .then(res => {
	//         if(!res.data || res.status !== 200 || res.data.success === false) return
	//         setProjects(res.data.projects)
	//         mediaAcquired.current = true
	//     }).catch(err => {
	//         mediaAcquired.current = false
	//     })

	// }

	useEffect(() => {
		setProjects(Projects as [])
		//GetData()
	}, [])

	return (
		<ScrollSectionComponent id="projects">
			<div className="projects">
				<h1 className="background-text title">Projects</h1>
				{projects.map((project: any, index: number) => {
					return (
						<ProjectComponent
							key={index}
							project={project}
							coverImageURL={
								mediaAcquired.current === true
									? `${API_MEDIA_URL}/${project.coverImageURL}`
									: project.coverImageURL
							}
							coverVideoURL={
								mediaAcquired.current === true
									? `${API_MEDIA_URL}/${project.coverVideoURL}`
									: project.coverVideoURL
							}
						/>
					)
				})}
			</div>
		</ScrollSectionComponent>
	)
}
