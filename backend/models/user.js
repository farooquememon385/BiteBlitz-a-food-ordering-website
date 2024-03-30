const mongoose = require('mongoose');

const Schema = mongoose.Schema

// Define the Title schema
const titleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titleName: { 
    type: String, 
    required: true 
    }
});

// Define the user schema
const userSchema = new Schema({
    // Assuming username is the primary key in the user table
    _id: mongoose.Schema.Types.ObjectId,
    // Add other fields for the user table
    // Assuming titleID is a foreign key referencing the Title table
    title: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Title'
    },
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String,
        required: true 
    },
    email: { 
        type: String,
        required: true 
    },
    phoneNumber: { 
        type: String,
        required: true 
    },
    username: { 
        type: String,
        required: true 
    },
    password: { 
        type: String,
        required: true 
    }
});

// Create models
const Title = mongoose.model('Title', titleSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Title, User };
