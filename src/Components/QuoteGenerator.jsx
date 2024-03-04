import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuoteGenerator.css";
import x from "./X_image.png";

const QuoteGenerator = ({ generateColor }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setQuote("");
    setAuthor("");
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      setQuote(data.content);
      setAuthor(data.author);
      generateColor()
    } catch (error) {
      console.log(error);
      console.log("Please reload or click on the Generate button Smartie ;)");
    }
  };
  // id="quote-box"
  return (
    <div className="OuterBox" id="quote-box">
      {/* <h1>Hello there</h1> */}
      <div className="QuoteBox" id="text">
        {quote ? (
          <h1>{quote}</h1>
        ) : (
          <h1>
            Searching perfect quote for you!
            <br />
            wait for it...
          </h1>
        )}
      </div>
      <div className="AuthorBox" id="author">
        {quote ? (
          <h2 className="space-between">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer noopener"
              id="tweet-quote"
            >
              <img className="Ximg" src={x} alt="Tweet this Quote!"></img>
            </a>
            <span>~{author}</span>
          </h2>
        ) : (
          <h2> Made by Shrey :)</h2>
        )}
      </div>
      <div className="ButtonBox">
        <button id="new-quote" onClick={fetchQuote}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
