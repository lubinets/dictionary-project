import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
        />
        <input
          type="submit"
          className="btn btn-primary submit-button"
          value="Search"
        />
      </form>
    </div>
  );
}
