const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvShowsSchema = new Schema({
    videoUrl:{
        type: String,
        required: true
    },
    videoTitle:{
        type: String,
        required: true
    },
    videoThumbnail:{
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("TvShows",tvShowsSchema);