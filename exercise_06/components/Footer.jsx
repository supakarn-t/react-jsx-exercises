import PropTypes from "prop-types";

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
Footer.propTypes = {
	onDecrease: PropTypes.func,
	onIncrease: PropTypes.func,
	isOn: PropTypes.func,
};

export default Footer;
