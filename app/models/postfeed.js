import chalk from 'chalk';
import PostFeed from './schemas/postfeed-schema';

export function Post(data) {
    const post = new PostFeed(data.newpost);
    return post.save();
}