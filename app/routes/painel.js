import PainelController from '../controllers/painel';

module.exports = api => {
    const painelController = new PainelController();

    api.route('/painel').get(painelController.getHomePainel)
    api.route('/painel/newpost').get(painelController.getNewpostPage)
    api.route('/painel/editpost/:postId').get(painelController.getEditpostPage)
};
