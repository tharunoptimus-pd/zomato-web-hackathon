import type { NextPage } from "next"
import FirstPart from "./components/FirstPart"
import SecondPart from "./components/SecondPart"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zomato</title>
				<meta name="description" content="This is the home page" />
			</Head>

			<div className="wrapper">
				<FirstPart />
				<SecondPart />
			</div>

			<style jsx>{`
				.wrapper {
					min-height: 100vh;
				}
			`}</style>

			<style global jsx>{`
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/bac203052382824f8c8fcd7668417f771597997180.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/9dd3d8fd6150ab3f8106f4a073d054521597921546.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 100;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/0256637bc22e4c9e069ad868c196d29f1597997099.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/0a2cb1a22221afd4a5c4f59bde89afda1597921603.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 200;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/081152f7adf53200c7f8789005ca54ca1597997115.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/6651f01000a2e122e587bb2282cb3ea21597921594.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 300;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/c750382e5207a1a41cdcb496ef2326d51597997149.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/aead83936ff20e860667e0a18f26d7571597921574.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 400;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/b27921d5a95f787012c8e9dfbb86c2751597997132.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/1674f573eef1f8ba15be69b44aab4d401597921585.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 500;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/8e7505f4e7be967217d81781b49425bc1597997165.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/df06bf5a1ce831e889b3b07f3bab84d61597921557.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 600;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/1792d65b5545ef5781d92cf519ad47c21597997060.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/def01ba19fdf2476f0fc1904e4195e011597921623.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 700;
				}
				@font-face {
					font-family: Okra;
					font-display: swap;
					src: url(https://b.zmtcdn.com/web_assets/c596984d29a9ca0a7995ac6f4d9ac6461597997080.woff2)
							format("woff2"),
						url(https://b.zmtcdn.com/web_assets/e791ade4b99ef84be3ac11a07f2a774c1597921614.ttf)
							format("truetype");
					font-style: normal;
					font-weight: 800;
				}
				body,
				html {
					margin: 0;
					padding: 0;
					font-size: 62.5%;
					font-weight: 300;
					box-sizing: border-box;
					min-height: 100vh;
				}
				body,
				button,
				textarea,
				input,
				input::-webkit-input-placeholder {
					font-family: Okra, Helvetica, sans-serif;
				}
				body,
				button,
				input,
				input::-moz-placeholder {
					font-family: Okra, Helvetica, sans-serif;
				}
				body,
				button,
				input,
				input:-ms-input-placeholder {
					font-family: Okra, Helvetica, sans-serif;
				}
				body,
				button,
				input,
				input::placeholder {
					font-family: Okra, Helvetica, sans-serif;
				}
				*,
				:after,
				:before {
					box-sizing: inherit;
					-webkit-tap-highlight-color: transparent;
				}
				:active,
				:focus {
					outline: 0;
				}
				@media (hover: none) {
					:active,
					:focus {
						outline: 0 !important;
					}
				}
				@media screen and (prefers-reduced-motion: reduce) {
					* {
						-webkit-animation-play-state: paused !important;
						animation-play-state: paused !important;
						-webkit-transition: none !important;
						transition: none !important;
						-webkit-scroll-behavior: auto !important;
						-moz-scroll-behavior: auto !important;
						-ms-scroll-behavior: auto !important;
						scroll-behavior: auto !important;
					}
				}
				div,
				p,
				span {
					font-size: 1.6rem;
				}
			
			`}</style>
		</>
	)
}

export default Home
