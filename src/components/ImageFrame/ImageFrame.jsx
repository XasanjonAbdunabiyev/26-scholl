import React from 'react'

import style from './sass/style.module.scss'

export default function ImageFrame(props) {
	return (
		<div className={style.framerContainer}>
			<img
				className={style.framer_image}
				src={props.imageUrl}
				alt="image"
			/>
			<div className={style.frame_content}>
				<h1>{props.frame_heading}</h1>
				<p>{props.frame_description}</p>
			</div>
		</div>
	)
}
