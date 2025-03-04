import "./App.css";
import QuoteBlock from "./components/QuoteBlock"
import React, { useState, useEffect } from "react";

function App() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetch("/api/quotes")
		.then((response) => response.json())
		.then((data) => setQuotes(data))
		.catch((error) => console.error("Error fetching quotes:", error))
	}, []);
	
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				{quotes.map((quote, index) => (
					<div key = { index }>
						<QuoteBlock quote = { quote } />
					</div>
				))}	
			</div>
		</div>
	);
}

export default App;
