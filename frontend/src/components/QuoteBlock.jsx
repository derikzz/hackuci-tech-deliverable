const QuoteBlock = ({ quote }) => {
    return (
        <div>
            <p className = "text-2xl font-medium mb-1">{ quote.message }</p>
            <p className = "text-lg">author: <strong>{ quote.name }</strong></p>
        </div>
    );
}

export default QuoteBlock;