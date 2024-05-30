// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value
	const [isOn, setIsOn] = useState(true); // Initial visibility state

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	const toggleIsOn = () => setIsOn(!isOn);

	return (
		<>
			<Header temp={temperature} isOn={isOn} toggleIsOn={toggleIsOn} />
			<Content temp={temperature} isOn={isOn} />
			<Footer
				onDecrease={decreaseTemperature}
				onIncrease={increaseTemperature}
				isOn={isOn}
			/>
		</>
	);
};

const Header = ({ temp, isOn, toggleIsOn }) => {
	return (
		<header className="flex flex-col gap-4 items-center lg:flex-row lg:justify-around w-full p-4 bg-sky-100 rounded-3xl ">
			{isOn ? (
				<button
					onClick={toggleIsOn}
					className="bg-blue-400 p-4 rounded-3xl text-white font-bold w-1/2 lg:w-1/3"
				>
					ON
				</button>
			) : (
				<button
					onClick={toggleIsOn}
					className="bg-red-500 p-4 rounded-3xl text-white font-bold w-1/2 lg:w-1/3"
				>
					OFF
				</button>
			)}
			{isOn && <span>Current Tamperature: {temp} °C</span>}
		</header>
	);
};

const Content = ({ temp, isOn }) => {
	return (
		<main className="flex items-center justify-around w-full h-80 p-4 bg-cyan-100 rounded-3xl relative overflow-hidden">
			<Temperature temp={temp} isOn={isOn} />
		</main>
	);
};

const Temperature = ({ temp, isOn }) => {
	return (
		<>
			{!isOn && <div className="absolute bg-black/30 w-full h-full"></div>}
			<h1 className="text-6xl font-semibold ">{temp} °C</h1>
		</>
	);
};

const Footer = ({ onDecrease, onIncrease, isOn }) => {
	return (
		<footer className="flex gap-4 items-center justify-around w-full p-4rounded-3xl relative">
			{!isOn && <div className="absolute top-0 left-0 w-full h-full"></div>}
			<button
				onClick={onDecrease}
				className="bg-red-500 p-4 rounded-3xl text-white font-bold w-1/2 overflow-hidden "
			>
				Down
			</button>

			<button
				onClick={onIncrease}
				className="bg-green-500 p-4 rounded-3xl text-white font-bold w-1/2 overflow-hidden "
			>
				Up
			</button>
		</footer>
	);
};

// prop validation
Header.propTypes = {
	temp: PropTypes.number,
	isOn: PropTypes.func,
	toggleIsOn: PropTypes.func,
};
Content.propTypes = {
	temp: PropTypes.number,
	isOn: PropTypes.func,
};
Temperature.propTypes = {
	temp: PropTypes.number,
	isOn: PropTypes.func,
};
Footer.propTypes = {
	onDecrease: PropTypes.func,
	onIncrease: PropTypes.func,
	isOn: PropTypes.func,
};

export default App;
