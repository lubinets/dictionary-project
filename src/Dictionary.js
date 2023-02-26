import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);

  function handleSearch(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearch);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="Search" onSubmit={search}>
        <input
          type="search"
          placeholder="Type any word here..."
          className="search-bar form-control"
          onChange={handleKeywordChange}
          defaultValue={props.defaultWord}
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
}
