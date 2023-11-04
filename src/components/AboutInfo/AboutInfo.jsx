import React from 'react'

import ImageFrame from '../ImageFrame/ImageFrame'

export default function AboutInfo(props) {
	return (
		<div className="about_info p-3">
			<div className="flex items-center gap-6 justify-between max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:justify-start">
				<div
                
                className="about_description w-[50%] text-2xl leading-10 max-[1000px]:text-xl font-inria-serif max-[1000px]:w-[95%]">
					{props.about_description}
				</div>
				<div className="about_image w-[40%] max-[1000px]:w-[60%] max-[800px]:w-[90%]">
					<ImageFrame
						imageUrl={props.about_image}
						frame_heading="Specialized school"
					/>
				</div>
			</div>
		</div>
	)
}
