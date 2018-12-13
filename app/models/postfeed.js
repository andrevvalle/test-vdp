import chalk from 'chalk';
import PostFeed from './schemas/postfeed-schema';

export function Post(data) {
    const post = new PostFeed(data.newpost);

    post.save((err) => {
        if (err) throw err;

        console.log(chalk.yellow('NEWPOST DATA'));
    }).then(newpost => {
        return newpost;
    });
}