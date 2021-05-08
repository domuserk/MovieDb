import { MoviesService } from './../movies/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  
  movies: any;
  id: any;
  routeActive: boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title: string;
  loadingSecondCard: boolean = false;
  trending: any;
  popular: any;
  messageToShow: any;
  moviesToShow: boolean = false;
  topRated: any;
  constructor(
    private moviesService: MoviesService
  ) { }

  async ngOnInit() {
    await this.moviesService.movieName.subscribe(msg => {
      this.messageToShow = msg;
      this.ngOnInit();
    })
    this.getTopRated(this.messageToShow)
  }

  async getTopRated(movieName?) {
    if (movieName != undefined && movieName != '') {
      this.moviesToShow = true;
      this.movies = await this.moviesService.getMovies(movieName)
    }
    try {
      this.topRated = await this.moviesService.getTopRated()
    }catch(e) {
      console.log(e)
    }
    return null
  }
}
