import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/services/movies.service'
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  movieName: FormGroup = new FormGroup({})
  movies: any;
  id:any;
  routeActive:boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title:string;
  loadingSecondCard: boolean = false;
  trending:any;
  popular:any;
  messageToShow: any;
  moviesToShow: boolean = false;
  messageToShowEquals:any;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
    ) { }

  async ngOnInit() {

    this.movieName = this.formBuilder.group ({
      title: ['']
    })
  
    this.getSearchBar()
    this.verifyEqualsSearch()
    this.getPopularMovies()
  }

  async getMovieName(movieName?) {

    if (movieName != undefined && movieName != '' ) {
      this.moviesToShow = true;
      this.movies = await this.moviesService.getMovies(movieName)
    }
    return null;
  }

  onClick() {
   this.routeActive = true
  }

  async getSearchBar() {
    if (this.messageToShow != undefined || this.messageToShow != '') {
      await this.moviesService.movieName.subscribe(msg => {
        this.messageToShow = msg;
        if (this.messageToShow != this.messageToShowEquals) {
          console.log('aqui meu chapa')
          this.getMovieName(this.messageToShow)
        }
       
      })
    } else {
      return null;
    }
  }

  async verifyEqualsSearch() {
    await this.moviesService.movieName.subscribe(msg => {
      this.messageToShowEquals = msg;
    })
    if (this.messageToShowEquals === this.messageToShow) return null;
  }
  
  async getPopularMovies() {
    if (this.messageToShow == '' || this.messageToShow == null){
    try {
      this.popular = await this.moviesService.getPopular()
    } catch (err) {
      console.log(err)
    }
    return null;
  }
 }
}



