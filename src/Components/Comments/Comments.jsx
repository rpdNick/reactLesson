import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem/CommentItem";
import axios from "axios";
import "./Comments.scss";

const Comments = () => {
  let [comments, setReviws] = useState([]);
  let [currentComment, setCurrentComment] = useState('');
  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/comments/post/${productId}`)
      .then((response) => {
        setReviws(response.data.comments);
      })
      .catch((error) => {
        console.error("Error fetching reviws:", error);
      });
  }, []);

  const addCommentHendler = () => {
    if (!currentComment) {
      console.log("Comment field is empty");
      return;
    }

    const newComment = {
      body: currentComment,
      postId: productId,
      userId: 1,
    };

    axios
      .post(`https://dummyjson.com/comments/add`, newComment)
      .then((response) => {
        setReviws((prevComments) => [response.data, ...prevComments]);
        setCurrentComment('');
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const getCommentValue = (e) => {
    let commentValue = e.target.value;
    setCurrentComment(commentValue);
  }

  return (
    <div className="container">
      <div className="Comments">
        <div className="new_comment">
          <textarea className="new_comment_field" placeholder="Type here..." onChange={getCommentValue} value={currentComment}></textarea>
          <button className="button primary" type="button" onClick={addCommentHendler}>Add comment</button>
        </div>
        {comments.map((comment) => (
          <CommentItem key={uuidv4()} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;