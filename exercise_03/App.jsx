import React from "react";
import PropTypes from "prop-types";

const App = () => {
	const temperature = 25;

	return (
		<>
			<Header temp={temperature} />
			<Content temp={temperature} />
			<Footer />
		</>
	);
};

function Header({ temp }) {
	return (
		<header>
			<button>ON / OFF</button>
			<span>Current Tamperature: {temp} °C</span>
		</header>
	);
}

function Content({ temp }) {
	return (
		<div>
			<Temperature temp={temp} />
		</div>
	);
}

function Temperature({ temp }) {
	return <p>{temp} °C</p>;
}

function Footer() {
	return (
		<footer>
			<button>Down</button>
			<button>Up</button>
		</footer>
	);
}

// prop validation
Header.propTypes = {
	temp: PropTypes.number,
};
Content.propTypes = {
	temp: PropTypes.number,
};
Temperature.propTypes = {
	temp: PropTypes.number,
};

export default App;
