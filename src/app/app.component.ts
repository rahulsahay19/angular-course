import { Component, Input, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MOVIES } from 'src/db-movie';
import { Movie } from './model/movie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  movies = MOVIES;

  @ViewChildren(MovieCardComponent)
  cards: QueryList<MovieCardComponent>;

  constructor(){
    
  }

 
  ngAfterViewInit() {
    this.cards.changes.subscribe(
      cards => console.log(cards)
    );
  }

  onMoviesEdited() {
    this.movies.push(
      {
        id: 7,
        name: "Top Gun",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_QL50_SY1000_CR0,0,646,1000_AL_.jpg',
        directorName: 'Tony Scott',
        longDescription: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
        genre: 'Thriller',
        reviewsCount: 9
    }
    );
  }


onMovieSelected(movie: Movie) {
  console.log('App component clicked', movie);
  
}

}
