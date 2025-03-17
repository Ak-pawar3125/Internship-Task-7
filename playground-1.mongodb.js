// The current database to use.
use("myDB");

// Find a document in a collection.
db.Users.find();

// Find a document where age is greater than 20.
db.Users.find({ age: { $gt: 20 } });

// Fetch all document's name and email only
db.Users.find({}, { name: 1, Email: 1 });

// upadte age of specific document
db.Users.updateOne({ Email: "akanksha@gmail.com" }, { $set: { age: 23 } });
db.Users.find();

// upadte many documents whre age is less than 18 
db.Users.updateMany({ age: { $lt: 18 } }, { $set: { status: "minor" } });
db.Users.find();

// delete specific document 
db.Users.deleteOne({ Email: "aditi@gmail.com" });
db.Users.find();

// delete documents where age is less than 18
db.Users.deleteMany({ age: { $lt: 18 } });
db.Users.find();

// drop entire collection
db.Users.drop();
db.Users.find();
