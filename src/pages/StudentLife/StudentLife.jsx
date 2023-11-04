import React from 'react'

import { Heading, StudentLifeCard } from '../../components'

export default function StudentLife() {
	return (
		<div className="student-life my-10">
			<div className="container">
				<Heading fontFamily="serif" pageTitle="Student Life" />
				<StudentLifeCard />
			</div>
		</div>
	)
}
