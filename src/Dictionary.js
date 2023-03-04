import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    // Documentation - https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearch);

    // Documentation - https://www.pexels.com/api/documentation/
    const pexelsApiKey = `yRTVrklLdAToaakLZVwhMFD7riYOWR2oM7Xs46j6aEWWqmRQvNb7CZ1j`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleSearch(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
