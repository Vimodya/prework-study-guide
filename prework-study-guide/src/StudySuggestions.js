import React from "react";

function StudySuggestion({ suggestion }) {
  return (
    <div className="StudySuggestion">
      <h2>What to Study First?</h2>
      <p>{suggestion}</p>
    </div>
  );
}

export default StudySuggestion;
