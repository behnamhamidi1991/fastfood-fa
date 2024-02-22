import React from 'react';
import './comments.scss';
import { commnets } from '../../../commentsData';

const Comments = () => {
  return (
    <div className="comment-page">
      <div className="comment-header">
        <h2>بخش کامنت ها</h2>
        <p>نظر خود را در مورد سرویس ها و مطالب با ما به اشتراک بگذارید</p>
      </div>
      <form>
        <input
          type="text"
          placeholder="نام خود را وارد کنید"
          className="name-input"
        />
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="name-email"
        />
        <textarea placeholder="پیام خود را بنویسید" />
        <button className="comment-send-btn">ارسال</button>
      </form>
      <div className="comments-container">
        {commnets.map((comment) => (
          <div key={comment.id} className="comment-box">
            <div className="comment-box-top">
              <img src={comment.userImage} alt="user" />
              <h4>{comment.name}</h4>
            </div>
            <div className="comment-box-bottom">
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
