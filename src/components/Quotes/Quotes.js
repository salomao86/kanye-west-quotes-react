import React, { useState } from 'react';
import FindQuote from '../FindQuote/FindQuote';
import Avatar from '../Avatar/Avatar';


const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    const addQuote = (newQuote) => {
        setQuotes(newQuote);
    }

    return (
        <div>
            <FindQuote onAdd={addQuote}></FindQuote>
            <Avatar>{quotes}</Avatar>
        </div>
    )
}

export default Quotes;