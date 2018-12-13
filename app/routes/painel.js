import PostFeed from '../controllers/postfeed';

module.exports = api => {
	api.get('/painel', (req, res) => {
        res.render('painel');
    });
	
    api.get('/painel/newpost', (req, res) => {
        res.render('painel/newpost');
    });
};
