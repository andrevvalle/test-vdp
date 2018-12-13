import { list, put, post, remove } from '../controllers/postfeed';

module.exports = api => {
	api.route('/postfeed').get(list);
	api.route('/postfeed/:postId').put(put);
	api.route('/postfeed').post(post);
	api.route('/postfeed/:postId').delete(remove);
};
