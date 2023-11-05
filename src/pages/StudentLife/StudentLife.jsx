import React from 'react'

import { Heading, StudentLifeCardList } from '../../components'

import studens_db from '../../db/students.json'

export default function StudentLife() {
	return (
		<div className="student-life my-10">
			<div className="container">
				<Heading fontFamily="serif" pageTitle="Student Life" />
				<StudentLifeCardList
					studentlifeCard={studens_db.students}
				/>
			</div>
		</div>
	)
}
