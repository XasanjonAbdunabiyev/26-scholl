import * as React from 'react'

import style from './sass/style.module.scss'

import { Heading, AboutInfo } from '../../components'

const about_info = {
	about_description:
		'The 26th general school under the Ministry of Public Education of Uzbekistan was founded in 1984 Our school can meet modern and quality education standards with modern equipments to get enough knowledge',
	about_image: '/images/about-image.jpeg',
}

export default function About() {
	return (
		<div className={style.schools} id='about'>
			<div className="custom-shape-divider-top">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"></path>
				</svg>
			</div>
			<div className="container">
				<Heading
					pageTitle="About school"
					fontFamily="inter-sans"
				/>

				<div className="about_content">
					<AboutInfo
						about_image={about_info.about_image}
						about_description={
							about_info.about_description
						}
					/>
				</div>
			</div>
		</div>
	)
}
