import React from 'react'

import { motion } from 'framer-motion'

const Showcase = () => {
	return (
		<div className="h-[90vh] py-3 overflow-hidden">
			<div className="container">
				<div className="banner-logo">
					<img
						src="/images/banner-image.png"
						alt="banner-image"
                        className='relative top-20'
					/>
				</div>
				<div className="mx-auto absolute rounded-lg top-40 right-2 bg-[#F2F5FD] text-center w-[70%] p-10  max-[900px]:w-[90%] max-[900px]:top-[400px] max-[500px]:w-full">
					<motion.div
						initial={{ opacity: 0, scale: 0.2 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
							scale: {
								type: 'spring',
								damping: 9,
								stiffness: 100,
								restDelta: 0.001,
							},
						}}>
						<h1 className="text-[#1A0EA9] font-nunito mx-auto w-[60%] font-bold text-3xl max-[1200px]:w-[90%] leading-loose max-[900px]:text-2xl max-[500px]:w-full">
							Ministry of Public Education of
							Republic of Uzbekistan
						</h1>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Showcase
