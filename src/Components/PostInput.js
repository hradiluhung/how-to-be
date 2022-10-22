import React from "react";

const PostInput = () => {
  return (
    <form className="post-input">
      <textarea
        className="post-input__textarea"
        placeholder="Tanyakan sesuatu"
      />
      <button className="post-input__button">Post</button>
    </form>
  );
};

export default PostInput;
