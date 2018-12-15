import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        lowercase: true
    }
});
const postfeedSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    categories: [categorySchema],
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Postfeed', postfeedSchema);