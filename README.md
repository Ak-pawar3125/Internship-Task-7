# Internship-Task-7

# CRUD Operations with MongoDB

This project demonstrates Create, Read, Update, and Delete (CRUD) operations in MongoDB for efficient data management in a MERN stack application.

# 🚀 Responsibilities

# 1️⃣ Create a Collection  
- Set up a MongoDB database (using CLI, Compass, or programmatically).  
- Define the document structure (e.g., a `users` collection with `name`, `email`, `age`).  
- Insert sample data to initialize the collection.  

# Example Document Structure:  
{ <br>
  "_id": ObjectId("123abc"),<br>
  "name": "John Doe",<br>
  "email": "johndoe@example.com",<br>
  "age": 25<br>
}

# 2️⃣ Retrieve (Read) Data  
- Fetch all documents from the collection.  
- Filter records using specific criteria (e.g., users above age 20).  
- Retrieve only necessary fields to optimize queries.  

# Example Queries:  

db.Users.find(); // Fetch all users<br>
db.Users.find({ age: { $gt: 20 } }); // Find users above 20<br>
db.Users.find({}, { name: 1, email: 1 }); // Fetch only name & email<br>


# 3️⃣ Update Data in the Collection  

- Modify existing records while keeping other fields unchanged.  
- Perform targeted updates (update one or multiple documents).  
- Verify changes after updating.  

# Example Queries:  

db.users.updateOne({ email: "johndoe@example.com" }, { $set: { age: 30 } });<br>
db.users.updateMany({ age: { $lt: 18 } }, { $set: { status: "minor" } });<br>

# 4️⃣ Delete Data from the Collection  

- Remove individual records based on conditions.  
- Delete multiple records if necessary.  
- Drop the entire collection if no longer needed.  

# Example Queries:  

db.users.deleteOne({ email: "johndoe@example.com" }); // Delete one user<br>
db.users.deleteMany({ age: { $lt: 18 } }); // Delete all minors<br>
db.users.drop(); // Drop the entire collection<br>