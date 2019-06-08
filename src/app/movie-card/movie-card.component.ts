import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';
import { Movie } from '../model/movie';


@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

@Input()
movie: Movie;

@Input()
cardIndex: number;

@Output()
movieSelected = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  onMovieViewed() {
    this.movieSelected.emit(this.movie);
  }

  isImageAvailable() {
    return this.movie && this.movie.iconUrl;
  }

  cardClasses() {
    if(this.movie.genre === 'Action') {
      return 'action';
    }

    // return {
    //   'beginner': this.course.category === 'BEGINNER'
    // }
  }
  cardStyles() {
   // return {'background-image': 'url(' + this.course.iconUrl +')'
  };
}


