import type { NextPage } from "next"

const Home: NextPage = () => {
	return (
		<>
			<div className="firstPart">
				<div className="firstPartContainer">
					<div className="headerPart">
						<div className="leftContent">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#ffffff"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" />
								</svg>
							</span>
							<span>Get the App</span>
						</div>
						<div className="rightContent">
							<span>Add restaurant</span>
							<span>Log in</span>
							<span>Sign up</span>
						</div>
					</div>

					<div className="content">
						<div className="logoContainer">
							<img
								src="/assets/images/pics/zomatoLogo.webp"
								alt="Zomato"
							/>
						</div>
						<div className="headingContainer">
							<span>
								Discover the best food & drinks in Chennai
							</span>
						</div>
						<div className="searchContainer">
							<div className="searchWrapper">
								<div className="firstThing">
									<div className="locationSvg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="#FF7E8B"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											aria-labelledby="icon-svg-title- icon-svg-desc-"
											role="img"
											className="sc-rbbb40-0 iRDDBk"
										>
											<title>location-fill</title>
											<path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
										</svg>
									</div>
									<input
										type="text"
										name="Location"
										placeholder="Chennai"
									/>
									<div className="dropDownSvg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="#4F4F4F"
											width="12"
											height="12"
											viewBox="0 0 20 20"
											aria-labelledby="icon-svg-title- icon-svg-desc-"
											role="img"
											className="sc-rbbb40-0 ezrcri"
										>
											<title>down-triangle</title>
											<path d="M20 5.42l-10 10-10-10h20z"></path>
										</svg>
									</div>
								</div>
								<div></div>
								<div className="secondThing">
									<div className="searchLogoSvg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="#828282"
											width="18"
											height="18"
											viewBox="0 0 20 20"
											aria-labelledby="icon-svg-title- icon-svg-desc-"
											role="img"
											className="sc-rbbb40-0 iwHbVQ"
										>
											<title>Search</title>
											<path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
										</svg>
									</div>
									<input
										type="text"
										placeholder="Search for restaurant, cuisine or dish"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background">
					<div className="backgroundImage">
						<img
							src="/assets/images/pics/mainBackground.webp"
							alt="Background"
						/>
					</div>
				</div>
			</div>

			<style jsx>{`		
				.firstPart {
					position: relative;
					margin-bottom: 4rem;
					overflow-x: hidden;
				}


				.firstPartContainer {
					
					height: calc(100vh - 30rem);
					min-height: 42rem;
					max-height: 57rem;
					width: 100%;
					position: relative;
					overflow: hidden;
					padding: 0 0.5rem;
					
				}

				.headerPart {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 17px 1rem;
					font-size: 1.125em;
					color: #fff;

					margin-bottom: 10rem;
				}

				.headerPart span {
					cursor: pointer;
				}

				.headerPart .leftContent {
					display: flex;
					align-items: center;
				}

				.headerPart .leftContent span:nth-child(1) {
					margin-right: 0.5rem;
					display: flex;
					align-items: center;
				}

				.headerPart .leftContent span:nth-child(1) img {
					height: 10px;
					width: 10px;
					color: white;
				}

				.headerPart .leftContent span:nth-child(2) {
					font-size: 14px;
					font-weight: 500;
				}

				.headerPart .rightContent {
					display: flex;
					gap: 15px;
				}
				.headerPart .rightContent span{
					padding: 8px;
					font-size: 18px;
				}

				.background {
					overflow-x: hidden;
				}

				.background img{
					position: absolute;
					top: 0px;
					left: 0px;
					height: 100%;
					width: 100%;
					object-fit: cover;
					opacity: 1;
					transition: all 1.4s ease 0s;
					z-index: -1;

					overflow-x: hidden;
				}

				.logoContainer {
					background: transparent;
					height: 6rem;
					max-height: none;
					width: 30rem;
					position: relative;
				}

				.logoContainer img {
					position: absolute;
					top: 0px;
					left: 0px;
					height: 100%;
					width: 100%;
					object-fit: contain;
					transform: none;
					opacity: 1;
					transition: all 1.4s ease 0s;
				}

				.firstPartContainer .content {
					position: absolute;
					bottom: calc(50% - 11.1rem);
					display: flex;
					flex-direction: column;
					-webkit-box-pack: center;
					justify-content: center;
					-webkit-box-align: center;
					align-items: center;
					width: 100%;
				}
				.firstPartContainer .content .headingContainer  {
					margin-top: 3rem;
					text-align: center;
				}

				.firstPartContainer .content .headingContainer span {
					color: white;
					text-align: center;
					font-size: 3.6rem;
				}

				.firstPartContainer .content .searchContainer {
					border-width: 0px;
					margin-top: 3rem;
				}

				.firstPartContainer .content .searchContainer {
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					height: 5.4rem;
					background: rgb(255, 255, 255);
					border-radius: 0.8rem;
					box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px;
					border: 1px solid rgb(232, 232, 232);
				}

				.firstPartContainer .content .searchWrapper {
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					height: 5.4rem;
					background: rgb(255, 255, 255);
					border-radius: 0.8rem;
					box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px;
					border: 1px solid rgb(232, 232, 232);
				}
				
				.searchWrapper .firstThing {
					display: flex;
					justify-content: space-around;
					position: relative;
					height: 100%;
					width: 24rem;
					border-radius: 0.8rem;
					padding: 0px 1rem;
					-webkit-box-align: center;
					align-items: center;
				}
				.searchWrapper .firstThing svg, .searchWrapper .secondThing svg{
					cursor: pointer;
				}

				.searchWrapper .firstThing input[type="text"] {
					border: none;
					font-size: 1.4rem;
					margin: 0px 1rem 0px 0.5rem;
				}

				.searchWrapper div:nth-child(2) {
					width: 0rem;
					height: 2rem;
					border: 0.05rem solid rgb(207, 207, 207);
				}

				.searchWrapper .secondThing {
					border-radius: 0.8rem;
					width: 53rem;
					height: 100%;
					display: flex;
					position: relative;
				}

				.searchWrapper .secondThing .searchLogoSvg {
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: center;
					justify-content: center;
					width: 6rem;
					margin: -1px -0.6rem -1px -1px;
				}
				.searchWrapper .secondThing input[type="text"] {
					border: none;
					font-size: 1.4rem;
					width: 100%;
					border-radius: 0.8rem;
				}

				@media (max-width: 768px) {

					.firstPartContainer .content {
						bottom: calc(50% - 20.1rem);
					}
					.firstPartContainer .content .searchContainer .secondThing {
						width: calc(100% - 4.8rem);
					}
				}

			`}</style>
		</>
	)
}

export default Home
