package com.example.customerapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
public class Review {

    @Id
    private String id;
    private String customerName;
    private String reviewText;
    private int rating;

    // ✅ Must have no-args constructor
    public Review() {}

    // ✅ Optional: all-args constructor
    public Review(String customerName, String reviewText, int rating) {
        this.customerName = customerName;
        this.reviewText = reviewText;
        this.rating = rating;
    }

    // ✅ Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
