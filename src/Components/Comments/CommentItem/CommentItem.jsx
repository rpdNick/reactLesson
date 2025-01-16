import "./CommentItem.scss";

const CommentItem = (props) => {
    return (
        <div className="CommentItem">
             <p className="autor">{props.comment.user.fullName}</p>
             <div className="comment_text">{props.comment.body}</div>
        </div>
    );
}

export default CommentItem;