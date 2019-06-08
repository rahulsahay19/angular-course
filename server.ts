

import * as express from 'express';
import {Application} from "express";
import { getAllMovies } from 'server/get-movies.route';
import { saveMovie } from 'server/save-movie.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/moives').get(getAllMovies);

app.route('/api/moives/:id').put(saveMovie);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



