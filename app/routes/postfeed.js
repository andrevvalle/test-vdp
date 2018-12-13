import PostFeed from '../controllers/postfeed';

module.exports = api => {
	api.route('/postfeed').get(PostFeed.list);
	api.route('/postfeed/:postId').put(PostFeed.put);
	api.route('/postfeed').post(PostFeed.post);
	api.route('/postfeed/:postId').delete(PostFeed.delete);
};
