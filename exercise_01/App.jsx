import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

function App() {
	// code here
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

function Header() {
	// code here
	return (
		<header>
			<h1>Welcome to My Website</h1>
			<Nav />
		</header>
	);
}

function Nav() {
	//code here
	return (
		<nav>
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

function Main() {
	// code here
	return (
		<main>
			<section>
				<h2>About Us</h2>
				<p>We are a company that values excellence and innovation.</p>
			</section>
		</main>
	);
}

function Footer() {
	// code here
	return (
		<footer>
			<p>&copy; 2024 My Website</p>
		</footer>
	);
}

export default App;
