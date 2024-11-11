import { useState } from "react";
import './QuoteGenerator.css'

export default function QuoteGenerator() {
    const quotes = [
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it’s done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        "Believe you can and you’re halfway there. - Theodore Roosevelt"
      ];

    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33A1",
        "#A133FF",
        "#33FFA1",
        "#FFA133"
    ];

    const [currentQuote, setCurrentQuote] = useState("");
    const [currentColor, setColor] = useState("");

    const generatorQuote = () => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }

    return (
        <div id="container" style={{backgroundColor: currentColor}}>
            <h1>Random Quote Generator</h1>
            <div id="quote-container"><p>{currentQuote}</p></div>
            <button onClick={generatorQuote}>Generate Random Quote</button>
        </div>
    );

}