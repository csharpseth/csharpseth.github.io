/** @format */

import axios from 'axios'
import { createContext, useEffect } from 'react'

export const AnalyticaContext = createContext({})

export function AnalyticaProvider(props: any) {
	function VisitSite() {
		axios
			.post('http://192.168.1.6:4000/analytics/record_visit', {})
			.then((res) => {
				console.log(res.data)
			})
	}

	useEffect(() => {
		// VisitSite()
	}, [])

	return (
		<AnalyticaContext.Provider value={{}}>
			{props.children}
		</AnalyticaContext.Provider>
	)
}
