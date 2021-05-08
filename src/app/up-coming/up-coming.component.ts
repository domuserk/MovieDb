import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies/services/movies.service';
@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.scss']
})
export class UpComingComponent implements OnInit {

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
  upComing: any;
  constructor(
    private moviesService: MoviesService
  ) { }

  async ngOnInit() {
    await this.moviesService.movieName.subscribe(msg => {
      this.messageToShow = msg;
      this.ngOnInit();
    })
    this.getUpComing(this.messageToShow)
  }

  async getUpComing(movieName?) {
    if (movieName != undefined && movieName != '') {
      this.moviesToShow = true;
      this.movies = await this.moviesService.getMovies(movieName)
    }
    try {
      this.upComing = await this.moviesService.getupComing()
    } catch (e) {
      console.log(e)
    }
    return null
  }
}

