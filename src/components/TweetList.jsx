import PropTypes from "prop-types";
import { memo } from "react";
import "../CSS/TweetList.css";
import Tweet from "./Tweet";
const MemoisedTweet = memo(Tweet);
function TweetList({ tweets, onEditTweet }) {
  return (
    <>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li className="tweet-like-wrapper" key={tweet.id}>
            <MemoisedTweet
              tweetId={tweet.id} // Corrected to `tweetId`
              content={tweet.content}
              likecontent={tweet.likecontent}
              createdAt={tweet.created.toString()} // Convert `created` to a string
              onEdit={onEditTweet} // Pass the edit handler properly
            />
          </li>
        ))}
      </ul>
    </>
  );
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Add `id` prop type
      content: PropTypes.string.isRequired,
      likecontent: PropTypes.number.isRequired,
      created: PropTypes.instanceOf(Date).isRequired, // Ensure `created` is a Date object
    })
  ).isRequired,
  onEditTweet: PropTypes.func.isRequired, // Add `onEditTweet` prop type
};

export default TweetList;
