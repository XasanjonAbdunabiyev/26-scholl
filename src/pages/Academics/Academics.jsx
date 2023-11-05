import React from 'react'

import { Heading } from '../../components'

export default function Academics() {
	return (
		<div id='academics'>
			<div className="container">
				<Heading fontFamily="serif" pageTitle="Academics" />
				<h2 className="my-4 text-3xl font-thin font-inria-serif">
					Teachers
				</h2>
				<div
					style={{ borderBottom: '1px solid #626981' }}
					className="flex gap-7 items-center my-5 pb-5">
					<div className="bg-[#CBFFD0] text-[#05670F]  font-inria-serif font-bold p-3 rounded-[50px] text-2xl">
						A+
					</div>
					<p className="text-2xl w-[65%] text-[#2A385D] font-inria-serif leading-snug max-[1000px]:w-full max-[1000px]:text-xl">
						Based on school accomplishments, salary,
						student reviews, and additional factors
					</p>
				</div>
				<div className="flex gap-5 my-4 items-center">
					<div className="font-bold p-3 rounded-[50px] font-inria-serif text-3xl">
						100%
					</div>
					<p className="text-2xl w-[65% text-[#2A385D]] leading-snug font-inria-serif max-[1000px]:w-full max-[1000px]:text-xl">
						of students agree that teachers put a lot of
						effort into teaching their classes.
					</p>
				</div>
				<div className="flex gap-5 my-4 items-center">
					<div className="font-bold p-3  font-inria-serif rounded-[50px] text-3xl">
						82%
					</div>
					<p className="text-2xl font-inria-serif w-[65%] text-[#2A385D] leading-snug max-[1000px]:w-full max-[1000px]:text-xl">
						of students agree that it is easy to
						understand classes in every teachers'
						lessons
					</p>
				</div>

				<div className="flex gap-5 my-3 items-center">
					<div className="font-bold p-3 font-inria-serif rounded-[50px] text-3xl">
						66%
					</div>
					<p className="text-2xl w-[65%] font-inria-serif leading-snug text-[#2A385D]  max-[1000px]:w-full max-[1000px]:text-xl">
						of students agree that given homeworks are
						manageable
					</p>
				</div>
			</div>
		</div>
	)
}
