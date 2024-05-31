import PropTypes from "prop-types";
import Temperature from "./Temperature";

const Content = ({ temp, isOn }) => {
	return (
		<main className="flex items-center justify-around w-full h-80 p-4 bg-cyan-100 rounded-3xl relative overflow-hidden">
			<Temperature temp={temp} isOn={isOn} />
		</main>
	);
};

// prop validation
Content.propTypes = {
	temp: PropTypes.number,
	isOn: PropTypes.func,
};

export default Content;
