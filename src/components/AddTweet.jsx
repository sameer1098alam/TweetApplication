import PropTypes from "prop-types";
import { useState } from "react";

function AddTweet({ onAddTweet }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Add Tweet"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTweet(text);
          setText(""); // Clear input
        }}
      >
        Tweet!!
      </button>
    </div>
  );
}

AddTweet.propTypes = {
  onAddTweet: PropTypes.func.isRequired,
};

export default AddTweet;
