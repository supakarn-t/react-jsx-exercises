import PropTypes from "prop-types";

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

// prop validation
Header.propTypes = {
	temp: PropTypes.number,
	isOn: PropTypes.func,
	toggleIsOn: PropTypes.func,
};

export default Header;
