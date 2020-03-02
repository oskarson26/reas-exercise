const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    Location: {
        Region: String,
        Subregion: String
    },
    Type: String,
    Owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Property', propertySchema)