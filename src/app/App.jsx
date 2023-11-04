import React from 'react'

/**
 * @components
 */

import { Layout, Showcase } from '../components'

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
				<Showcase />
				<About />
				<AdditionalCard />
				<Academics />
				<StudentLife />
				<EquepmentOption />
			</Layout>
		</div>
	)
}
