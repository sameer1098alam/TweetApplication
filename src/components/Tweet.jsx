import PropTypes from "prop-types";
import { useState } from "react";
import "../CSS/Tweet.css";

function Tweet({ tweetId, content, likecontent, createdAt, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content); // Store the edited content

  const handleSave = () => {
    onEdit({
      id: tweetId,
      content: newContent,
      likecontent,
      createdAt, // Keep the original createdAt (Date object)
    });
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="tweet-wrapper">
      <div className="tweet-edit-wrapper">
        <div className="tweet-content">
          {isEditing ? (
            <input
              type="text"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
          ) : (
            content
          )}
        </div>
        <div>
          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="like-createdAt-wrapper">
        <div className="likes">{likecontent} likes</div>
        <div className="created-at">
          Tweeted at {createdAt.toLocaleString()} {/* Format the Date */}
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweetId: PropTypes.number.isRequired, // Ensure tweetId is passed as prop
  content: PropTypes.string.isRequired,
  likecontent: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired, // Ensure createdAt is a Date object
  onEdit: PropTypes.func.isRequired, // Ensure onEdit is passed as a function
};

export default Tweet;
