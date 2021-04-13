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
  filepath: string = 'https://image.tmdb.org/t/p/w500'
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
  }

  async getMovieName() {

    try {
      const title = this.movieName.get('title')?.value;
     return this.movies = await this.moviesService.getMovies(title)
    }catch(err) {
      console.log(err)
    }
  }
  onClick() {
    /*this.route.params.subscribe(
      (params:any) => {
     this.id = params['id'];
     });
     this.id = 464052
     console.log('id',this.id)
    this.moviesService.getMovie(this.id)
    setTimeout(() => 
     window.location.reload
    (), 200);*/
  }
}
