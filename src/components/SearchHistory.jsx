import React from "react";

const SearchHistory = ({ history }) => {
  return (
    <div>
      <h4>Historial de búsquedas:</h4>
      <ul>
        {history.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
