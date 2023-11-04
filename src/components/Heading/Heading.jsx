import React from 'react'

import style from './sass/style.module.scss'

const Heading = (props) => {
	if (props.fontFamily === 'inter-sans') {
		return <h1 className={style.section_title}>{props.pageTitle}</h1>
	} else if (props.fontFamily === 'serif') {
		return (
			<h1 className={style.section_title_serif}>
				{props.pageTitle}
			</h1>
		)
	}
}

export default Heading
