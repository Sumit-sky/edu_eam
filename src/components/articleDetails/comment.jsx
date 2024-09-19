import React, { useState } from "react";
import { FaUser, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa6";

export default function Comment({ username, comment, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleReply = () => {
    setShowReplyBox(!showReplyBox);
  };

  const submitReply = () => {
    console.log("Reply submitted:", replyText);
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div className="flex flex-col items-center text-left my-2 w-full">
      <div className="flex items-center w-full">
        <FaUser className="text-4xl border-2 rounded-full" />
        <p className="text-xl ml-2">{username}</p>
      </div>
      <div className="flex flex-col items-start w-[87%]">
        <div className="flex justify-between w-full">
          <p>{comment}</p>
          <button className="flex items-center" onClick={handleLike}>
            {isLiked ? (
              <FaThumbsUp className="mr-4 " />
            ) : (
              <FaRegThumbsUp className="mr-4" />
            )}
            {likes}
          </button>
        </div>
        <button className="text-blue-700" onClick={handleReply}>
          Reply
        </button>
        {showReplyBox && (
          <div className="flex flex-col mt-2 w-full">
            <textarea
              className="border rounded p-2 w-full outline-none"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
            />
            <button
              className="bg-[#2c2c54] text-white p-2 mt-2 rounded"
              onClick={submitReply}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
