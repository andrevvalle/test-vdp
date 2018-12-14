import * as PostfeedModel from '../models/postfeed';

const list = (req, res) => {
	const params = req.params || {};
	const query = req.query || {};
    const defer = PostfeedModel.GetAll();

    defer.then(posts => {
        res.json(posts);
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
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

const put = (req, res) => {
    const params = req.params || {};
    const newData = req.body || {};
    const defer = PostfeedModel.UpdatePost(params.postId, newData)

    defer.then(data => {
        res.json(data);
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
};

const remove = (req, res) => {
    const params = req.params || {};
    const defer = PostfeedModel.RemovePost(params.postId)

    defer.then(data => {
        res.json(data);
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
};

export { list, put, post, remove }