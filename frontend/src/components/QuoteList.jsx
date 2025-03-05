import React from "react";
import QuoteBlock from "./QuoteBlock"

function QuoteList({ quotes }) {
    return (
        <div>
            <p className = "text-3xl font-bold mb-4">Quotes</p>
            <ul>
                {quotes.map((quote, index) => {
                    const even = index % 2 == 0;
                    const background = even ? "bg-blue-100" : "bg-gray-100";
                
                    return (
                        <li
                            key = { index }
                            className = { `${background} p-4` }
                        >
                            <QuoteBlock quote = { quote } />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default QuoteList;