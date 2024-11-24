import React from "react";

function Error() {
  return (
    <p className="error">
      <span
        role="img"
        aria-label="error"
      >
        💥
      </span>{" "}
      There was an error fetching questions.
    </p>
  );
}

export default Error;
