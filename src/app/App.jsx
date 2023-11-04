import React from 'react'

/**
 * @components
 */

import { Layout } from '../components'

/**
 * @pages
 */
import {
	About,
	Academics,
	AdditionalCard,
	StudentLife,
	EquepmentOption,
} from '../pages'

export default function App() {
	return (
		<div className="page-wrapper">
			<Layout>
				<About />
				<AdditionalCard />
				<Academics />
				<StudentLife />
				<EquepmentOption />
			</Layout>
		</div>
	)
}
