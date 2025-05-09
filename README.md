🛒 UrbanFood E-Commerce Platform
- Batch: HNDSE24.2F | Module: Data Management 2 
- Group No: 19
- Members:COHNDSE242F-053, COHNDSE242F-054, COHNDSE242F-055, COHNDSE242F-072 
- GitHub Submission Link: https://github.com/MihinFernando/UrbanFood

📌 Project Overview
A full-stack e-commerce platform for UrbanFood, built to connect urban farmers with consumers. Key features:  
- Frontend: React,CSS 
- Backend: JAVA/Spring Boot
- Databases:  
  - Oracle: Products, orders, suppliers, payments (PL/SQL for business logic).  
  - MongoDB: Customer reviews/feedback.  

---

🛠 Setup Instructions
Prerequisites
- Oracle Database 19c/21c  
- MongoDB (for reviews)  
- Java 17
- IdealC Intellij IDE

Installations
1. Clone the repository:  
   git clone https://github.com/MihinFernando/UrbanFood
   cd UrbanFood-Ecommerce

2. Database Setup:
    Run query files in Oracle SQL Developer.
    Insert sample data (database/DummyData.sql)

3. Backend:
    cd backend
    npm install    # Install dependencies
    npm start     # Launch server

4. Frontend:
    cd frontend
    npm install
    npm run dev
