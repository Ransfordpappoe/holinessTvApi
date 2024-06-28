const Video = require("../model/TvShows");
const AdVideos = require("../model/TvAdshow");
const {format, startOfDay} = require("date-fns")

const getCurrentVideo = async(req, res) =>{
    const videos = await Video.find().sort('startTime');

    if(!videos) return res.status(204).json({"message":"no video found"});
    
    const now = Date.now();
    for (let i = 0; i < videos.length; i++) {
        if (now >= videos[i].startTime && now <= videos[i].endTime) {
            let playbackPosition = (now - videos[i].startTime) / 1000;
            res.json({
                videoUrl: videos[i].videoUrl,
                videoDesc: videos[i].videoTitle,
                playbackPosition
            })
            return;
        }
    }
    res.status(204).json({"message":"no video currently playing"});
}

const getVideoAds=async(req,res)=>{
    try {
        const adVideos = await AdVideos.find();
    if(!adVideos) res.status(204).json({"message":"no video ad found"});
    res.json(adVideos);
    } catch{
        
    }
}

const getAllVideos = async(req, res)=>{
    try {
        const today = startOfDay(new Date());
        const videos = await Video.find({startTime: {$gte:today}});
        if(!videos) return res.status(204).json({"message":"no videos found"});
        res.json(videos);
    } catch{
        
    }
}

module.exports={
    getCurrentVideo,
    getAllVideos,
    getVideoAds,
}