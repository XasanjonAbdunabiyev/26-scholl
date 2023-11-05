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
				<div className={style.footer_content}>
					<div className="footer_logo">
						<img
							src={footer_logo}
							width={300}
							alt="footer-logo"
						/>
					</div>
				</div>
				<div className={style.footer_wrapper}>
					<div className={style.footerItem}>
						<h3>Скачайте наше приложение</h3>
						<div className="download-app">
							<a
								href="/"
								className={style.download_btn}>
								<div className="item-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="29.016"
										height="35.491"
										viewBox="0 0 29.016 35.491">
										<g
											id="XMLID_110_"
											transform="translate(0 0)">
											<path
												id="XMLID_138_"
												d="M288.509,701.152c-2.929,5.169-1.034,13.094,2.24,17.918,1.723,2.412,3.273,4.479,5.685,4.479h.172a5.708,5.708,0,0,0,2.584-.689,7.51,7.51,0,0,1,3.1-.689,6.663,6.663,0,0,1,2.929.689,6.491,6.491,0,0,0,2.757.689c2.584,0,4.135-2.412,5.685-4.479a15.129,15.129,0,0,0,2.412-5h0c0-.172,0-.345-.172-.345h0a7.2,7.2,0,0,1-4.479-6.891,7.411,7.411,0,0,1,3.618-6.375h0l.172-.172v-.172a8.177,8.177,0,0,0-6.547-3.618h-.517a10.448,10.448,0,0,0-4.135,1.034,5.955,5.955,0,0,1-2.068.517,17.816,17.816,0,0,1-2.067-.517,8.01,8.01,0,0,0-3.618-.861h-.172A8.979,8.979,0,0,0,288.509,701.152Z"
												transform="translate(-287.058 -688.058)"
												fill="#fff"></path>
											<path
												id="XMLID_116_"
												d="M302.664,691.6a7.426,7.426,0,0,0-5.341,2.757,7.184,7.184,0,0,0-1.9,5.686c0,.172.172.172.345.172h.345a6.828,6.828,0,0,0,5-2.584,8.284,8.284,0,0,0,1.9-5.858A.534.534,0,0,0,302.664,691.6Z"
												transform="translate(-281.056 -691.6)"
												fill="#fff"></path>
										</g>
									</svg>
								</div>
								<div className="item-text">
									<div className="subtitle">
										Download on the
									</div>
									<div className="title">
										App Store
									</div>
								</div>
							</a>
							<a
								href="/"
								className={style.download_btn}>
								<div className="item-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="34.974"
										height="38.764"
										viewBox="0 0 34.974 38.764">
										<g
											id="Сгруппировать_71"
											data-name="Сгруппировать 71"
											transform="translate(0 0)">
											<g
												id="Сгруппировать_70"
												data-name="Сгруппировать 70">
												<g
													id="Сгруппировать_69"
													data-name="Сгруппировать 69">
													<g
														id="Сгруппировать_68"
														data-name="Сгруппировать 68">
														<path
															id="Контур_64"
															data-name="Контур 64"
															d="M426.322,703.435l-7.064-4.135-5.858,5.685,5.341,5.169,7.581-4.307a1.45,1.45,0,0,0,.689-1.206A1.744,1.744,0,0,0,426.322,703.435Z"
															transform="translate(-392.037 -685.517)"
															fill="#fff"></path>
														<path
															id="Контур_65"
															data-name="Контур 65"
															d="M426.509,704.566l-7.753-4.479L401.7,691.3,421,709.907Z"
															transform="translate(-400.494 -691.3)"
															fill="#fff"></path>
														<path
															id="Контур_66"
															data-name="Контур 66"
															d="M401.8,721.462l16.884-9.131,7.236-4.307-5-4.824Z"
															transform="translate(-400.422 -682.698)"
															fill="#fff"></path>
														<path
															id="Контур_67"
															data-name="Контур 67"
															d="M401,691.7v37.731l19.468-18.951Z"
															transform="translate(-401 -691.011)"
															fill="#fff"></path>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div className="item-text">
									<div className="subtitle">
										Available on the
									</div>
									<div className="title">
										Google Play
									</div>
								</div>
							</a>
						</div>
					</div>
					<div className={style.footerItem}>
						<h3>Contact informations</h3>
						<a
							href="tel:+998712072017"
							className="flex items-start gap-5 text-white text-xl  justify-center my-5">
							<BsFillTelephoneFill fontSize={20} />
							+998 (71) 207-20-17
						</a>
						<a className="flex items-start gap-5 text-white text-xl justify-center my-5">
							<AiOutlineMail fontSize={20} />
							@INFOPIMA.UZ
						</a>
						<a className="flex items-center gap-5 text-white text-start justify-center my-5">
							<BsFillGeoAltFill fontSize={24} />
							<p className="w-[60%]">
								TASHKENT CITY YASHNABAD,
								DISTRICT, MAHTUMKULLI STREET
							</p>
						</a>
					</div>
					<div className={style.footerItem}>
						<h3>Frontend.helpline_title</h3>
						<a
							href="tel:+998712074048"
							className="flex items-center gap-5 text-white text-xl text-center justify-center my-5">
							<BsFillTelephoneFill fontSize={20} />
							+998 (71) 207 40 48
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
