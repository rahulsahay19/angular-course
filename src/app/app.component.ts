import { Component, Input, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
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

onMovieSelected(movie: Movie) {
  console.log('App component clicked', movie);
  
}

}
