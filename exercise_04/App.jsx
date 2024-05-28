// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	return (
		<>
			<Header temp={temperature} />
			<Content temp={temperature} />
			<Footer
				onDecrease={decreaseTemperature}
				onIncrease={increaseTemperature}
			/>
		</>
	);
};

const Header = ({ temp }) => {
	return (
		<header className="flex flex-col gap-4 items-center lg:flex-row lg:justify-around w-full p-4 bg-sky-100 rounded-3xl ">
			<button className="bg-blue-400 p-4 rounded-3xl text-white font-bold lg:w-1/3">
				ON / OFF
			</button>
			<span>Current Tamperature: {temp} °C</span>
		</header>
	);
};

const Content = ({ temp }) => {
	return (
		<main className="flex items-center justify-around w-full h-80 p-4 bg-cyan-100 rounded-3xl ">
			<Temperature temp={temp} />
		</main>
	);
};

const Temperature = ({ temp }) => {
	return <h1 className="text-6xl font-semibold ">{temp} °C</h1>;
};

const Footer = ({ onDecrease, onIncrease }) => {
	return (
		<footer className="flex gap-4 items-center justify-around w-full p-4rounded-3xl ">
			<button
				onClick={onDecrease}
				className="bg-red-500 p-4 rounded-3xl text-white font-bold w-1/2 "
			>
				Down
			</button>
			<button
				onClick={onIncrease}
				className="bg-green-500 p-4 rounded-3xl text-white font-bold w-1/2 "
			>
				Up
			</button>
		</footer>
	);
};

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
Footer.propTypes = {
	onDecrease: PropTypes.number,
	onIncrease: PropTypes.number,
};

export default App;
