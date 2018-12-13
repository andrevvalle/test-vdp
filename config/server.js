import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';

const api = express();

api.set('view engine', 'ejs');
api.set('views', './app/views');

api.use(cors());
api.use(methodOverride('X-HTTP-Method'));
api.use(methodOverride('X-HTTP-Method-Override'));
api.use(methodOverride('X-Method-Override'));
api.use(methodOverride('_method'));

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

module.exports = api;