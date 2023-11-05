import * as React from 'react'

import { Layout, Showcase } from '../components'

import {
	About,
	Academics,
	AdditionalCard,
	StudentLife,
	EquepmentOption,
} from '../pages';

import aos from "aos";

export default function App() {
	React.useEffect(() => {
		aos.init();
	}, [])
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
