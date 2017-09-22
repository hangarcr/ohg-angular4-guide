var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    schema = new Schema({
        name: {type: String, required: true},
        championships: {type: Number, required: true},
        year: {type: Number, required: true},
    })

module.exports = mongoose.model('Team', schema);