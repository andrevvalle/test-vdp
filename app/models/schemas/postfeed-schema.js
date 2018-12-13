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
        required: true
    },
    content: {
        type: String,
        required: true
    },
    categories: [categorySchema],
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Postfeed', postfeedSchema);