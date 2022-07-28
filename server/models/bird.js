const mongoose = require('mongoose')

const birdSchema = new mongoose.Schema({
    commonName: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    order: {
        type: String,
        required: true
    },
    spottedAt: {
        type: String,
        required: true

    },
    spottedLocation: {
        type: String,
        required: true

    }
}) 

module.exports = mongoose.model('Bird', birdSchema)