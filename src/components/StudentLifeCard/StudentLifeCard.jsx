import React from 'react'

import style from './sass/style.module.scss'

export default function StudentLifeCard(props) {
	return (
		<div
			className={style.studens_life_card}
			data-aos="fade-up"
			data-aos-anchor-placement="center-center">
			<img src={props?.studens_imageUrl} alt="" />
			<h3>{props?.studentsTitle}</h3>
		</div>
	)
}
