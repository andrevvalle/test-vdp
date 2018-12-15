import * as PostfeedModel from '../models/postfeed';

class PainelController {
    getHomePainel(req, res) {
        const defer = PostfeedModel.GetPosts();

        defer.then(posts => {
            res.render('painel', { listPosts: posts });
        });

        defer.catch(err => {
            res.status(400);
            res.json({message: err.message});
        });
    }

    getNewpostPage(req, res) {
        res.render('painel/newpost');
    }
    
    getEditpostPage(req, res) {
        const params = req.params || {};
        const defer = PostfeedModel.GetPostsById(params.postId);

        defer.then(post => {
            res.render('painel/editpost', { post });
        });

        defer.catch(err => {
            res.status(400);
            res.json({message: err.message});
        });
    }
}

export default PainelController;