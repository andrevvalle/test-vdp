import { get, update, create, remove } from '../controllers/postfeed';

module.exports = api => {
	api.route('/postfeed').get(get);
	api.route('/postfeed/:postId').put(update);
	api.route('/postfeed').post(create);
	api.route('/postfeed/:postId').delete(remove);
};
