import React from "react";

const App = () => {
	const temperature = 25;

	return (
		<>
			<Header />
			<Content />
			<Footer />
		</>
	);
};

function Header() {
	return (
		<header>
			<button>ON/OFF</button>
			<span>Current Tamperature: 25 ํC</span>
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
	return <p>25 ํC</p>;
}

function Footer() {
	return (
		<footer>
			<button>Down</button>
			<button>Up</button>
		</footer>
	);
}

export default App;
