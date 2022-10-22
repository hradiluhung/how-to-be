import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentCount, getPosts, showFormattedDate } from "../Utils/data";
import PostInput from "./PostInput";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
  AiOutlineComment,
} from "react-icons/ai";

const DiscussionGroupContent = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(() => {
    const data = getPosts(id);
    return data;
  });
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    const data = getPosts(id);
    setPosts(data);
  }, [id, posts]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  return (
    <div className="discussion-content">
      <PostInput />
      <h2 className="discussion-content__title">Konten</h2>
      <div className="discussion-content__posts">
        {posts &&
          posts.map((post) => (
            <div className="discussion-content__post" key={post.id}>
              <div className="discussion-content__post-header">
                <div className="discussion-content__post-header-image">
                  <img src="https://picsum.photos/200" alt="user" />
                </div>
                <div className="discussion-content__post-header-info">
                  <h3 className="discussion-content__post-header-info_name">
                    {post.poster}
                  </h3>
                  <p className="discussion-content__post-header-info_date">
                    {showFormattedDate(post.timePosted)}
                  </p>
                </div>
              </div>
              <div className="discussion-content__post-body">
                <p className="discussion-content__post-body_text">
                  {post.content}
                </p>
              </div>
              <div className="discussion-content__post-action">
                <div className="discussion-content__post-action_like">
                  <button
                    className="discussion-content__post-action_like-btn"
                    onClick={handleLike}
                  >
                    {!isLiked ? (
                      <AiOutlineLike size={18} />
                    ) : (
                      <AiFillLike size={18} />
                    )}
                    <span>{post.likeCount}</span>
                  </button>
                  <button
                    className="discussion-content__post-action_like-btn"
                    onClick={handleDislike}
                  >
                    {!isDisliked ? (
                      <AiOutlineDislike size={18} />
                    ) : (
                      <AiFillDislike size={18} />
                    )}
                    <span>{post.dislikeCount}</span>
                  </button>
                </div>

                <div className="discussion-content__post-action_comment">
                  <button className="discussion-content__post-action_comment-btn">
                    <AiOutlineComment size={18} />
                    <span>Komentar ({getCommentCount(post.id)})</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DiscussionGroupContent;
