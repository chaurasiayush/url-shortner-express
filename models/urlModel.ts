import mongoose from "mongoose";

// model for saving urls
// ShortenUrls:  {
//     originalUrl: String;
//     shortUrlToken: String;
//     createdBy: String;
//     clicks: Number;
// }

const ShortenUrlsSchema = new mongoose.Schema({
    originalUrl :{
        type: String,
        required: true,
    },
    shortUrlToken: {
        type: String,
        required: true,
        unique: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
    },
    createdBy: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true
    }
});

const ShortenUrls = mongoose.model('shortenUrls', ShortenUrlsSchema);

export default ShortenUrls;