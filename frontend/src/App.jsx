import React, { useState, useEffect } from "react";
import "./App.css";
import DatePicker from "./components/DatePicker";
import HackHeader from "./components/HackHeader";
import QuoteBlock from "./components/QuoteBlock";


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
		<div className="App h-full">
			<HackHeader />

			<main className = "flex-grow p-4 ">
				<section className = "bg-white max-w">
					<div className = "max-w-md mx-auto mb-4 p-4">
						<p className = "text-2xl font-bold mb-4" >Submit a quote</p>
						<form onSubmit = { handleSubmit } className = "space-y-4">
							<label htmlFor="input-name" className = "font-semibold mb-2">Name</label>
							<input type="text" name="name" id="input-name" required className = "w-full border border-gray-300 rounded p-2"/>
							<label htmlFor="input-message" className = "font-semibold mb-2">Quote</label>
							<input type="text" name="message" id="input-message" required className = "w-full border border-gray-300 rounded p-2"/>
							<button type="submit" className = "bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500">Submit</button>
						</form>
					</div>
				</section>

				<section className = "bg-gray-100 max-w">
					<p>Earliest Date to Retrieve Quotes</p>
					<DatePicker
						date = { date }
						setDate = { setDate }
						onSelect = { handleGetQuotes }
					/>
				</section>

				<h2>Previous Quotes</h2>
				<div className="messages">
					{quotes.map((quote, index) => (
						<div key = { index }>
							<QuoteBlock quote = { quote } />
						</div>
					))}	
				</div>
			</main>
			
		</div>
	);
}

export default App;
