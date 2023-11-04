import * as React from 'react'

import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
			<Footer />
		</React.Fragment>
	)
}
