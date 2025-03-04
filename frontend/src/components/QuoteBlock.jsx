const QuoteBlock = ({ quote }) => {
    return (
        <div>
           <p>Quote: { quote.message }</p>
            <p>Name: { quote.name }</p>
        </div>
    );
}

export default QuoteBlock;