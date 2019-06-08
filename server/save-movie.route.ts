import {Request, Response} from 'express';
import { findMovieById } from 'src/db-movie';


export function saveMovie(req: Request, res: Response) {

    const id = req.params["id"],
          changes = req.body;

    console.log("Saving Movie", id, JSON.stringify(changes));

    const movie = findMovieById(id);

    movie.longDescription = changes.longDescription;

    res.status(200).json(movie);

}
