import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies/services/movies.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})

export class NowPlayingComponent implements OnInit {
  movieName: FormGroup = new FormGroup({})
  movies: any;
  id: any;
  routeActive: boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title: string;
  loadingSecondCard: boolean = false;
  trending: any;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private moviesService: MoviesService
    ) { }

   ngOnInit() {
     this.movieName = this.formBuilder.group({
       title: ['']
     })

     this.getMovieName()
    this.getNowPlaying()
  }


  async getNowPlaying() {
    this.movies = await this.moviesService.getNowPlaying()
  }

  onClick() {
    this.routeActive = true
  }

  async getMovieName(movieName?) {

    /*this.title = this.movieName.get('title').value;
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
      return null;*/
  }

}
