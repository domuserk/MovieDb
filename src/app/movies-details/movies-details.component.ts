import { MoviesService } from './../movies/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
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
    this.getCredits(this.id)
    this.getAllMovies(this.id)   
    this.getimagesMovie(this.id)
  }

  async getimagesMovie(id) {
    this.imagesMovie = await this.moviesService.imagesMovies(id)
  }
  
  async getAllMovies(id) {
    this.allMovies = await this.moviesService.getAllMovies(this.id)
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
}
