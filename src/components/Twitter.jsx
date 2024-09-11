import { memo, useCallback, useState } from "react";

import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets = [
  { id: 1, content: "Tweet Application
Developed a dynamic tweet application with core features including writing, posting, and editing tweets. Users can:

Write and post new tweets with real-time content updates.
View the timestamp of each tweet.
Sort tweets by the most recent time.
Edit existing tweets and save changes dynamically.
This project demonstrates skills in state management, React hooks, and user interface design.", likecontent: 100, created: new Date() },
  { id: 2, content: "Hello World2", likecontent: 200, created: new Date() },
  { id: 3, content: "Hello World3", likecontent: 300, created: new Date() },
  { id: 4, content: "Hello World4", likecontent: 400, created: new Date() },
];
const MemoisedTweet = memo(AddTweet);

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);

  const handleAddTweet = useCallback(
    (text) => {
      let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 1;
      setTweets([
        ...tweets,
        {
          id: nextId,
          content: text,
          likecontent: Math.floor(Math.random() * 10),
          created: new Date(), // Ensure the `created` date is stored as a Date object
        },
      ]);
    },
    [tweets]
  );

  const handleEditTweet = useCallback(
    (updatedTweet) => {
      setTweets(
        tweets.map((tweet) =>
          tweet.id === updatedTweet.id ? { ...tweet, ...updatedTweet } : tweet
        )
      );
    },
    [tweets]
  );

  // Sort the tweets by the most recent ones (highest 'created' timestamp first)
  const sortTweets = useCallback(
    (e) => {
      e.preventDefault(); // Prevent the default behavior of the button
      const sortedTweets = [...tweets].sort(
        (t1, t2) => t2.created.getTime() - t1.created.getTime()
      );
      setTweets(sortedTweets); // Update the state with the sorted tweets
    },
    [tweets]
  );

  return (
    <>
      {/* Fixed header for AddTweet and Sort button */}
      <div className="fixed-header">
        <MemoisedTweet onAddTweet={handleAddTweet} />
        <button className="sort-tweets-button" onClick={sortTweets}>
          Sort Tweets by Most Recent
        </button>
      </div>

      {/* Main content area, padded to avoid overlapping the fixed header */}
      <div className="body-padding">
        <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
      </div>
    </>
  );
}

export default Twitter;
