// src/pages/Review.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    customerName: '',
    reviewText: '',
    rating: ''
  });

  const fetchReviews = async () => {
    const res = await axios.get('http://localhost:8080/api/reviews');
    setReviews(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.customerName || !form.reviewText || !form.rating) return alert("All fields are required");
    await axios.post('http://localhost:8080/api/reviews', form);
    setForm({ customerName: '', reviewText: '', rating: '' });
    fetchReviews(); // refresh reviews
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>

      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="customerName"
          placeholder="Your Name"
          value={form.customerName}
          onChange={handleChange}
        />
        <textarea
          name="reviewText"
          placeholder="Write your review..."
          value={form.reviewText}
          onChange={handleChange}
        ></textarea>
        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value="">Select Rating</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        <button type="submit">Submit Review</button>
      </form>

      <div className="review-list">
        {reviews.map((r) => (
          <div key={r.id} className="review-card">
            <h4>{r.customerName}</h4>
            <p>{r.reviewText}</p>
            <div className="rating">
              {'⭐'.repeat(r.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
