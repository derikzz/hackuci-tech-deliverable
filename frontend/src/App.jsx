import React, { useState, useEffect } from "react";
import "./App.css";
import DatePicker from "./components/DatePicker";
import QuoteBlock from "./components/QuoteBlock";
import quotebook from "./assets/quotebook.webp";


function App() {
    const today = new Date().toISOString().split("T")[0];

	const [quotes, setQuotes] = useState([]);
	const [date, setDate] = useState(today);

	const fetchQuotes = async (date = "") => {
		let url = "/api/quotes"
		if(date) {
			url += `?date=${date}`
		}
		
		fetch(url)
			.then((response) => response.json())
			.then((data) => setQuotes(data))
			.catch((error) => console.error("Error fetching quotes:", error))
	}

	useEffect(() => {
		fetchQuotes()
	}, []);

	const handleGetQuotes = () => {
		fetchQuotes(date)
	}

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevent the refresh!

		const formData = new FormData(event.target)

		await fetch("api/quote", {
			method: "POST",
			body: formData
		})

		if(date) {
			await fetchQuotes(date);
		} else {
			await fetchQuotes();
		}

		event.target.reset();
	}
	
	return (
		<div className="App">
			<img
				src = { quotebook }
				alt = "Quotebook Icon"
				style = {{ width: "50px", height: "50px" }}
			/>
			
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			<form onSubmit = { handleSubmit }>
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Earliest Date to Retrieve Quotes</h2>
			<DatePicker
				date = { date }
				setDate = { setDate }
				onSelect = { handleGetQuotes }
			/>

			<h2>Previous Quotes</h2>
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
