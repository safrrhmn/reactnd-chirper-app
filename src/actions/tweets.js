import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOOGLE_TWEET = "TOOGLE_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOOGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}
export function handleToogleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handleTweet ", e);
      alert("There was an error liking the tweet, Try again");
    });
  };
}
