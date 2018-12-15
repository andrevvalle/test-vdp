import * as PostfeedModel from '../models/postfeed';

const get = (req, res) => {
    const defer = PostfeedModel.GetPosts();

    defer.then(posts => {
        res.json(posts);
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
};

const create = (req, res) => {
	const data = req.body || {};
    const defer = PostfeedModel.CreatePost(data);

    defer.then(data => {
        res.json(data)
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
};

const update = (req, res) => {
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
    // if (!params.postId) res.status(500);
    
    const defer = PostfeedModel.RemovePost(params.postId)

    defer.then(data => {
        res.json(data);
    });

    defer.catch(err => {
        res.status(400);
        res.json({message: err.message});
    });
};

export { get, update, create, remove }