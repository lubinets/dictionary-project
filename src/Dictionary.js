import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    // Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearch);
  }

  function handleSearch(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="Search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type any word here..."
            className="search-bar form-control"
            onChange={handleKeywordChange}
          />
          <input
            type="submit"
            className="btn btn-primary submit-button"
            value="Search"
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
