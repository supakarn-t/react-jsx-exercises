import React from "react";

const App = () => {
	const temperature = 25;

	function Header() {
		return (
			<header>
				<button>ON/OFF</button>
				<span>Current Tamperature: {temperature} ํC</span>
			</header>
		);
	}

	function Content() {
		return (
			<>
				<Temperature />
			</>
		);
	}

	function Temperature() {
		return <p>{temperature}</p>;
	}

	function Footer() {
		return (
			<footer>
				<button>Down</button>
				<button>Up</button>
			</footer>
		);
	}

	return (
		<>
			<Header />
			<Content />
			<Footer />
		</>
	);
};

export default App;
