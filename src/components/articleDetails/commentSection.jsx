import React, { useState } from "react";
import Comment from "./comment";

export default function CommentSection({ commentData }) {
  const [comments, setComments] = useState(commentData);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      userName: "Anonymous",
      text: newComment,
      likes: 0,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="border-2 rounded-lg w-full my-3 p-3 text-[#2c2c54] h-auto">
      <div className="flex justify-between items-center">
        <p className="text-lg">Share your thoughts in the comments</p>
        {/* <button
          className="border-none bg-[#2c2c54] rounded-lg text-white py-2 px-6"
          onClick={handleAddComment}
        >
          Add Comment
        </button> */}
      </div>
      <div className="flex my-4">
        <input
          type="text"
          className="border-2 rounded-lg w-full p-2 mr-2"
          placeholder="Type your comment here..."
          value={newComment}
          onChange={handleInputChange}
        />
        <button
          className="border-none bg-[#2c2c54] rounded-lg text-white py-2 px-4"
          onClick={handleAddComment}
        >
          Post
        </button>
      </div>
      <div className="flex flex-col w-full">
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <Comment
              key={index}
              username={comment.userName}
              comment={comment.text}
              initialLikes={comment.likes}
            />
          ))}
      </div>
    </div>
  );
}
