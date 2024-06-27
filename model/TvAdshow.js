const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvadshow = new Schema({
    videoUrl:{
        type: String,
        required: true
    },
    videoTitle:{
        type: String,
        required: true
    },
});
module.exports = mongoose.model("Tvadshows",tvadshow);