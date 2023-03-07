/** @format */

import { useState, useLayoutEffect, useEffect } from 'react'
import { GET } from '../../API'
import { API_URL } from '../../config/Config'
import '../../styles/ProjectsPage.scss'
import ContainerComponent from '../components/ContainerComponent'
import { HalfPageSpacerComponent } from '../components/PageSpacerComponent'
import ProjectPreviewComponent from '../components/ProjectPreviewComponent'

export default function ProjectsPage() {
	const [projects, setProjects] = useState<[]>([])

	async function GetProjects() {
		const data = await GET(API_URL + '/projects/previews')
		if (data.success === false) return

		setProjects(data.projects)
	}

	useLayoutEffect(() => {
		GetProjects()
	}, [])

	useEffect(() => {
		console.log(projects)
	}, [projects])

	return (
		<ContainerComponent>
			<ul className="projects-list">
				{projects.map((project, index) => {
					return (
						<ProjectPreviewComponent
							key={index}
							project={project}
						/>
					)
				})}
			</ul>
			<HalfPageSpacerComponent />
		</ContainerComponent>
	)
}
