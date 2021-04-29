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
  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {

    this.movieName = this.formBuilder.group ({
      title: ['']
    })

    this.getMovieName()
  }

  async getMovieName(movieName?) {
    
    this.title = this.movieName.get('title').value;
    if(this.title == '') {
      this.loadingSecondCard = false;
      this.title = 'justice league'
    }else {
      this.loadingSecondCard = true;
    }
    try {
     return this.movies = await this.moviesService.getMovies(this.title)
    }catch(err) {
      console.log(err)
    }
      return null;
      
    /*try {
      return this.trending = await this.moviesService.getTrending()
    } catch (err) {
      console.log(err)
    }
    return null;*/
  }
  onClick() {
   this.routeActive = true
  }
}



