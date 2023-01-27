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
				<h1 className="countDisplay">{count}</h1>
				<button
					className="countingButton decrement"
					onClick={() => {
						decrement();
					}}>
					Decrement
				</button>
				<button
					className="countingButton increment"
					onClick={() => {
						increment();
					}}>
					Increment
				</button>
			</section>
		</main>
	);
};
export default CountingApp;
