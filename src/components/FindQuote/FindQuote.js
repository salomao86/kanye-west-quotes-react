import React, { useEffect } from 'react';
import './FindQuote.css';

const url = 'https://api.kanye.rest';
let data;

const FindQuote = ({ onAdd }) => {

  useEffect(() => {
    getQuotes();
  });

  async function getQuotes(event) {
    try {
      const res = await fetch(url);
      data = await res.json();
      event.preventDefault();
      onAdd(data.quote);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button className="button bt-green" onClick={getQuotes}>Nova Frase</button>
  )
}

export default FindQuote;