import * as PostfeedModel from '../models/postfeed';

module.exports = api => {
	api.get('/painel', (req, res) => {
        const defer = PostfeedModel.GetAll();

        defer.then(posts => {
            res.render('painel', { listPosts: posts });
        });

        defer.catch(err => {
            res.status(400);
            res.json({message: err.message});
        });
    });
	
    api.get('/painel/newpost', (req, res) => {
        res.render('painel/newpost');
    });
};
