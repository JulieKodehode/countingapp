// Libraries
import React, { useState } from "react";

// Styling
import "./styles/styles.css";

const CountingApp = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((oldCount) => {
			return oldCount + 1;
		});
	};

	const decrement = () => {
		setCount((newCount) => {
			return newCount - 1;
		});
	};

	return (
		<main className="countingMain">
			<section>
				<h1>{count}</h1>

				<button
					className="increment"
					onClick={() => {
						increment();
					}}>
					Increment
				</button>
				<button
					className="decrement"
					onClick={() => {
						decrement();
					}}>
					Decrement
				</button>
			</section>
		</main>
	);
};
export default CountingApp;
