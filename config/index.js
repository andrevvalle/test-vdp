require('dotenv').config({ path: './.env' });

export default {
	env: process.env.NODE_ENV || 'development',
	server: {
		port: 3000
	}
};