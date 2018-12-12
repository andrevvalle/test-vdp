exports.list = (req, res) => {
	const params = req.params || {};
	const query = req.query || {};
    console.log('List =>>>>', params, query);
};

exports.put = (req, res) => {
	const data = req.body || {};
    console.log('Put =>>>>', data);
};

exports.post = (req, res) => {
	const data = req.body || {};
    console.log('Post =>>>>', data.newpost);
};

exports.delete = (req, res) => {
    const params = req.params || {};
    console.log('Delete =>>>>', data);
};