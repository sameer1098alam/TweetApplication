import PropTypes from "prop-types";
import { useState } from "react";
import "../CSS/AddTweet.css";

function AddTweet({ onAddTweet }) {
  const [text, setText] = useState("");

  return (
    <div className="add-tweet">
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
