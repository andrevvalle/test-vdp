import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import config from './config/index';
import api from './config/server';
import connectDB from './config/connectDB';

connectDB.then(() => {
	console.log(chalk.blue('DB Connected!!!'));

	api.use((err, req, res, next) => {
		console.log(chalk.red(
			`err, req, res, next ==>, ${err}`
		));
	});

	api.listen(config.server.port, err => {
		fs.readdirSync(path.join(__dirname, 'app/routes')).map(file => {
			require('./app/routes/' + file)(api);
		});

		console.log(chalk.blue(
			`API is now running on port ${config.server.port} in ${config.env} mode`
		));
	});
});
