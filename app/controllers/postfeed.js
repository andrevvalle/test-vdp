import * as PostfeedModel from '../models/postfeed';

const list = (req, res) => {
	const params = req.params || {};
	const query = req.query || {};
    console.log('List =>>>>', params, query);
};

const put = (req, res) => {
	const data = req.body || {};
    console.log('Put =>>>>', data);
};

const post = (req, res) => {
	const data = req.body || {};
    const defer = PostfeedModel.Post(data);

    defer.then(data => {
        res.json(data)
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
};

const remove = (req, res) => {
    const params = req.params || {};
    console.log('Delete =>>>>', params);
};

export { list, put, post, remove }