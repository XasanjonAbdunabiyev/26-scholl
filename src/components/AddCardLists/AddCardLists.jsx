import React from 'react'

import ImageFrame from '../ImageFrame/ImageFrame'

import style from "./sass/style.module.scss";

const AddCardLists = (props) => {
	return (
		<div className={style.additional_card_container}>
			{props.card_list?.map((additional_card) => {
				return (
					<ImageFrame
						key={additional_card.additional_title}
						frame_heading={
							additional_card.additional_title
						}
						imageUrl={additional_card.additional_image}
						frame_description={
							additional_card.additional_description
						}
					/>
				)
			})}
		</div>
	)
}

export default AddCardLists
