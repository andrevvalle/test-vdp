import PostFeed from './schemas/postfeed-schema';

export function CreatePost(data) {
    return new PostFeed(data.newpost).save();
}

export function GetPosts() {
    return PostFeed.find();
}

export function GetPostsById(id) {
    return PostFeed.findById(id);
}

export function UpdatePost(id, updateData) {
    return PostFeed.findByIdAndUpdate(id, updateData.editPost, {new: true});
}

export function RemovePost(id) {
    return PostFeed.findByIdAndDelete(id);
}