import { MoviesService } from './../movies/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  id: any;
  result:any;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  filepathOriginal: string = 'https://image.tmdb.org/t/p/original'
  params: any;
  credits: any;
  trending:any;
  allMovies:any;
  imagesMovie:any;
  searchMovies:any;
  button:boolean = false;
  showAllCasts: string = 'Show All';
  messageToShow: any;
  messageToShowEquals:any;
  movies: any;
  routeActive:boolean = false;
  moviesToShow: boolean = false;
  loadingSecondCard: boolean = false;
  movieName:any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  async ngOnInit() {
    this.route.params.subscribe(
    (params:any) => {
   this.id = params['id'];
   });
   this.route.params.subscribe(
    (params:any) => {
   this.params = params['popular'];
   });
   if(this.params == 'popular' ) {
     this.params = false;
   }else {
     this.params = true;
   }

   this.movieName = this.formBuilder.group ({
    title: ['']
  })

    this.getSearchBar()
    this.verifyEqualsSearch()
    this.getAllMovies(this.id)  
    this.getCredits(this.id)
    this.getimagesMovie(this.id)
  }

  async getimagesMovie(id) {
    this.imagesMovie = await this.moviesService.imagesMovies(id)
  }
  
  
  async getCredits(id) {
    this.credits = await this.moviesService.getCredits(this.id)
  }
  
  toggleCasts() {
    if (this.button == true) {
      this.button = false;
      this.showAllCasts = 'Show All'
    }else {
      this.button = true;
      this.showAllCasts = 'Toggle'
    }
  }
  
  onClick() {
    this.routeActive = true
  }
  
  async getMovieName(movieName?) {
    if (movieName != undefined && movieName != '' ) {
      this.moviesToShow = true;
      this.movies = await this.moviesService.getMovies(movieName)
    }
    return null;
  }
  
  async getSearchBar() {
    if (this.messageToShow != undefined || this.messageToShow != '') {
      await this.moviesService.movieName.subscribe(msg => {
        this.messageToShow = msg;
        if (this.messageToShow != this.messageToShowEquals) {
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

  async getAllMovies(id) {
    if (this.messageToShow == '' || this.messageToShow == null){
      try {
        this.allMovies = await this.moviesService.getAllMovies(this.id)
      } catch (err) {
        console.log(err)
      }
      return null;
    }
  }
}
