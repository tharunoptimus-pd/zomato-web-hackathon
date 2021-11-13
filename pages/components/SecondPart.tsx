import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="secondPart">
				<div className="outlineContainer">
					<div className="outline">
						<div className="outlineThing">
							<a href="#">
								<div
									style={{height: "24rem", width: "100%"}}
									className="outlineThingInside"
								>
									<div className="outlineThingImageContainer"></div>
									<img
										alt="Order Food Online"
										src="/assets/images/pics/firstOutline.webp"
										loading="lazy"
										className="outlineThingImage"
									/>
								</div>
								<div className="outlineThingTitle">
									<p >
										Order Food Online
									</p>
								</div></a
							>
						</div>
						<div className="outlineThing">
							<a href="#">
								<div style={{height: "24rem", width: "100%"}}

									className="outlineThingInside"
								>
									<div className="outlineThingImageContainer"></div>
									<img
										alt="Order Food Online"
										src="/assets/images/pics/secondOutline.webp"
										loading="lazy"
										className="outlineThingImage"
									/>
								</div>
								<div className="outlineThingTitle">
									<p >
										Go out for a meal
									</p>
								</div>
							</a>
						</div>
						<div className="outlineThing">
							<a href="#">
								<div style={{height: "24rem", width: "100%"}}
									className="outlineThingInside"
								>
									<div className="outlineThingImageContainer"></div>
									<img
										alt="Order Food Online"
										src="/assets/images/pics/thirdOutline.webp"
										loading="lazy"
										className="outlineThingImage"
									/>
								</div>
								<div className="outlineThingTitle">
									<p >
										Zomato Pro
									</p>
								</div></a
							>
						</div>
						<div className="outlineThing">
							<a href="#">
								<div style={{height: "24rem", width: "100%"}}
									className="outlineThingInside"
								>
									<div className="outlineThingImageContainer"></div>
									<img
										alt="Order Food Online"
										src="/assets/images/pics/fourthOutline.jfif"
										loading="lazy"
										className="outlineThingImage"
									/>
								</div>
								<div className="outlineThingTitle">
									<p >
										Nightlife & Clubs
									</p>
								</div></a
							>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.secondPart{
					position: relative;
					max-width: 110rem;
					max-height: initial;
					margin: 0px auto;
				}

				.outlineContainer {
					margin-bottom: 6rem;
				}

				.outline {
					width: 100%;
					position: relative;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
				}

				.outlineThing {
					position: relative;
					width: 100%;
					-webkit-box-flex: 0;
					flex-grow: 0;
					flex-shrink: 0;
					max-width: 25rem;
					padding: 0px 7.5px 10px 0px;
					transition: all 0.3s ease 0s;
				}

				.outlineThing:hover {
					transform: scale(1.03);
				}

				.outlineThing a {
					text-decoration: none;
				}


				.outlineThingInside {
					max-width: 100%;
					width: 100%;
					height: 24rem;
					overflow: hidden;
					border-radius: 1.2rem;
					overflow: hidden;
					position: relative;
				}

				.outlineThingImageContainer {
					width: 100%;
					position: absolute;
					top: 0px;
					left: 0px;
					height: 100%;
					background: linear-gradient(to right, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 10%, rgb(248, 248, 248) 40%, rgb(248, 248, 248) 100%) no-repeat rgb(248, 248, 248);
					opacity: 0;
					transition: all 0.25s ease-out 0s;
					will-change: opacity;
					border-radius: inherit;
				}

				.outlineThingImage {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transform: none;
					opacity: 1;
					will-change: transform, opacity;
					border-radius: inherit;
					filter: unset;
					transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
				}

				.outlineThingTitle {
					padding: 1rem 0px 1.6rem;
					width: 100%;
					position: absolute;
					bottom: 0px;
					left: 0px;
					background: white;
					border: 1px solid rgb(232, 232, 232);
					border-radius: 0px 0px 1.2rem 1.2rem;
					box-sizing: border-box;
				}

				.outlineThingTitle p {
					font-size: inherit;
					line-height: 1.5;
					margin: 0px;
					color: rgb(54, 54, 54);
					text-align: center;
					font-weight: 500;
					font-size: 2rem;
					line-height: 3.2rem;
					
				}

				@media (max-width: 768px) {
					.outlineThing {
						max-width: 30rem;
					}
				}
				
				@media (max-width: 30em) {
					.outlineThing {
						max-width: 34rem;
					}
				}

			`}</style>
		</>
	)
}

export default Home
