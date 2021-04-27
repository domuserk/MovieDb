import { MoviesService } from './services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  movieName: FormGroup = new FormGroup({})
  movies: any;
  id:any;
  routeActive:boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
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
    var title = this.movieName.get('title').value;
    if(title == '') {
      title = 'batman'
    }
    try {
     return this.movies = await this.moviesService.getMovies(title)
    }catch(err) {
      console.log(err)
    }
      return null;
  }
  onClick() {
   this.routeActive = true
  }
}
