import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import chalk from 'chalk';

import config from './config';

const api = express();

api.use(cors());
api.use(methodOverride('X-HTTP-Method'));
api.use(methodOverride('X-HTTP-Method-Override'));
api.use(methodOverride('X-Method-Override'));
api.use(methodOverride('_method'));

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.use((err, req, res, next) => {
	console.log(chalk.red(
		`err, req, res, next ==>, ${err}`
	));
});

api.listen(config.server.port, err => {
	fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
		require('./routes/' + file)(api);
	});

	console.log(chalk.blue(
		`API is now running on port ${config.server.port} in ${config.env} mode`
	));
});

module.exports = api;