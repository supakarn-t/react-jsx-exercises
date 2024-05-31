import PropTypes from "prop-types";

const Temperature = ({ temp, isOn }) => {
	return (
		<>
			{!isOn && <div className="absolute bg-black/30 w-full h-full"></div>}
			<h1 className="text-6xl font-semibold ">{temp} °C</h1>
		</>
	);
};

// prop validation
Temperature.propTypes = {
	temp: PropTypes.number,
	isOn: PropTypes.func,
};

export default Temperature;
