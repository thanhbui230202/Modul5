import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
  <div className="card">
    <div className="card--header" />
    <img
      className="avatar"
      src="https://vanhoadoisong.vn/wp-content/uploads/2022/09/100-hinh-nen-hinh-anh-songoku-dep-nhat-cho-dien-thoai-may-tinh-28.jpg"
      alt="avatar"
    />
    <div className="card--body">
      <div>
        <p className="text-header">Ruma Khan</p>
        <p className="text-sub">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <button className="btn third">FOLLOW</button>
      </div>
    </div>
  </div>
</div>
);

