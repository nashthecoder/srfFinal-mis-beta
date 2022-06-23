const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSessionSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    clinic: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('SchoolSession', SchoolSessionSchema)