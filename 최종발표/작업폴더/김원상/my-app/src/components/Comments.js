import React, { useEffect, useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import "./Comments.css";
import { useMember } from "../contexts/MemberContext";
import {
  addDoc,
  collection,
  db,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "../api/firebase";

function Comments({ modalData, uploadTime, onCommentSubmit }) {
  const currentUser = useMember();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Comments"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedComments = [];
      snapshot.forEach((doc) => {
        updatedComments.push(doc.data());
      });
      setComments(updatedComments);
    });

    return () => unsubscribe();
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (comment.trim() !== "") {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const newComment = {
        author: currentUser.memberNickName || "Anonymous",
        content: comment,
        time: `${year}-${month}-${day} ${hours}:${minutes}`,
      };

      try {
        await addDoc(collection(db, "Comments"), {
          ...newComment,
          timestamp: serverTimestamp(),
        });
        onCommentSubmit(newComment);
        // setComments((prevComments) => [...prevComments, newComment]);
        setComment("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="modal-content-comments">
      <div className="modal-content-comment">
        {comments.length === 0 ? (
          <div className="no-comments">가장 먼저 댓글을 달아보세요 !</div>
        ) : (
          comments.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              modalData={modalData}
              uploadTime={uploadTime}
            />
          ))
        )}
      </div>
      <div className="comment-input-container">
        <input
          className="comment-input"
          placeholder="댓글을 입력해주세요."
          value={comment}
          onChange={handleCommentChange}
        />
        <button className="comment-button" onClick={handleCommentSubmit}>
          확인
        </button>
      </div>
    </div>
  );
}

function Comment({ comment, modalData, uploadTime }) {
  return (
    <div className="comment">
      <div className="comment-users">
        <div className="modaldata-profile">
          {modalData &&
          modalData.userData &&
          modalData.userData.profileImageURL ? (
            <img
              src={modalData.userData.profileImageURL}
              alt="Profile"
              className="profiles"
            />
          ) : (
            <PiUserCircleLight className="profiles" />
          )}
        </div>
        <div className="nickname-wrapper">
          <div className="profile-nickname">{comment.author}</div>
          <div className="comment-content">{comment.content}</div>
        </div>
      </div>
      <div className="comment-uploadTime">{comment.time}</div>
    </div>
  );
}

export default Comments;
