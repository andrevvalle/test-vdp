import PostFeed from './schemas/postfeed-schema';

export function Post(data) {
    return new PostFeed(data.newpost).save();
}

export function GetAll() {
    return PostFeed.find();
}

export function UpdatePost(id, updateData) {
    return PostFeed.findByIdAndUpdate(id, updateData.editPost, {new: true});
}

export function RemovePost(id) {
    return PostFeed.findByIdAndDelete(id);
}