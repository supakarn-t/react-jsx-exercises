// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

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

export default App;
