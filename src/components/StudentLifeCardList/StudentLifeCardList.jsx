import React from 'react'

import StudentLifeCard from '../StudentLifeCard/StudentLifeCard'

import style from "./sass/style.module.scss";

const StudentLifeCardList = (props) => {
	return (
		<div className={style.studentLifeCardContainer}>
			{props.studentlifeCard?.map((students) => {
				return (
					<StudentLifeCard
						studens_imageUrl={students.student_image}
						studentsTitle={students?.student_title}
						key={students?.student_title}
					/>
				)
			})}
		</div>
	)
}

export default StudentLifeCardList
