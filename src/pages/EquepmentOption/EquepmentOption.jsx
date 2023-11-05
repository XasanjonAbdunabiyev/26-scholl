import React from 'react'

import style from './sass/style.module.scss'

import { EquepmenTable, Heading } from '../../components'

export default function EquepmentOption() {
	return (
		<div className="equment-option overflow-hidden" id={style.page}>
			<div className="container">
				<Heading
					fontFamily="inter-sans"
					pageTitle="School equipments option"
				/>
				<EquepmenTable />
			</div>
		</div>
	)
}
