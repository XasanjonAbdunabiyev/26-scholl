import React from 'react'

import footer_logo from '/images/banner-image-remove-bg.png'

import style from './sass/style.module.scss'

import { BsFillTelephoneFill, BsFillGeoAltFill } from 'react-icons/bs'

import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div class="custom-shape-divider-top-1699122446">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none">
					<path
						d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
						class="shape-fill"></path>
				</svg>
			</div>
			<div className="container">
				<div className={style.footer_content} id='contact'>
					<div className="footer_logo">
						<img
							src={footer_logo}
							width={300}
							alt="footer-logo"
						/>
					</div>
					<div className="text-white font-bold font-nunito text-3xl leading-relaxed">
						Ministory of Public Education of Respublic
						Uzbekistan
					</div>
				</div>
				<div className={style.footer_wrapper}>
					<div className={style.footerItem}>
						<h3>Our Sites</h3>
						<div className="download-app leading-loose">
							<a
								className="text-white block my-8 font-nunito underline text-xl"
								href="https://emaktab.uz/"
								target="_blank">
								Kundalik.com
							</a>

							<a
								className="text-white block  my-8 font-nunito underline text-xl"
								href="https://uzedu.uz/uz"
								target="_blank">
								Xalq Talimi vazirligi
							</a>
						</div>
					</div>
					<div className={style.footerItem}>
						<h3>Contact informations</h3>
						<a
							href="tel:+998990670885"
							className="font-nunito text-white text-lg  font-bold justify-center my-5">
							<BsFillTelephoneFill fontSize={20} />
							+998 (99) 067-08-85
						</a>
						<a
							href="mailto:xonbabayevanasiba@gmail.com"
							className="font-nunito break-keep text-white text-lg font-bold justify-center my-5">
							<AiOutlineMail fontSize={24} />
							xonbabayevanasiba@gmail.com
						</a>
						<a className="text-white text-start justify-center my-5">
							<BsFillGeoAltFill fontSize={24} />
							<p className="font-nunito text-lg font-bold">
								Toshkent Region, Okangaron
							</p>
						</a>
					</div>
					<div className={style.footerItem}>
						<h3>For Messages</h3>
						<input
							type="text"
							className="font-nunito my-3 rounded text-gray-600"
							placeholder="Send A Question"
						/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
