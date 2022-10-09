const mongoose = require('mongoose');
// mongodb://localhost:27017

// mongoose.connect('mongodb://localhost:27017/UserDataManager');
// mongoose.connect('mongodb+srv://temp-user:qFRu15qXeBoDtxog@sandbox.tbv72.mongodb.net/crmDb?retryWrites=true&w=majority');

module.exports.User = mongoose.model('User', {
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
	lastName:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
	nationality: String,
	weight: Number,
    hobby: [String]
});