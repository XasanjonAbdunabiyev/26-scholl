import React from 'react'

import { Heading, AddCardLists } from '../../components'

import additional_db from '../../db/additional-cards.json'

export default function AdditionalCard() {
	return (
		<div className="addition-cards my-10">
			<div className="container">
				<div className="my-3">
					<Heading
						fontFamily="serif"
						pageTitle="Additional information"
					/>
				</div>
				<div className="addition-card-list">
					<AddCardLists
						card_list={additional_db.additionalCards}
					/>
				</div>
			</div>
		</div>
	)
}
