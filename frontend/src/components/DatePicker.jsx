import React from "react";

function DateFilter({ date, setDate, onSelect }) {
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <div>
            <input
                type="date"
                value={ date }
                onChange={ handleDateChange }
            />
            <button onClick={ onSelect }>Get Quotes</button>
        </div>  
    );
}

export default DateFilter;