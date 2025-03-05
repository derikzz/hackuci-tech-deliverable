import React from "react";

function DateFilter({ date, setDate, onSelect }) {
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <div>
            <p className = "text-2xl font-bold mb-4 mt-4">Retrieve Quotes</p>
            <p className = "text-med font-medium mb-4">All quotes created from the selected date until the current time will be displayed.</p>
            <input
                type="date"
                value={ date }
                onChange={ handleDateChange }
                className = "w-full border border-blue-300 rounded p-2 mb-4"
            />
            <br/>
            <button onClick={ onSelect } className = "bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-500 mb-4">Get Quotes</button>
        </div>  
    );
}

export default DateFilter;