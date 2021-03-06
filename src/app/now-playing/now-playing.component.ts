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
  moviesPopular: any;
  id: any;
  routeActive: boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title: string;
  loadingSecondCard: boolean = false;
  trending: any;
  messageToShow: any;
  moviesToShow: boolean = false;
  messageToShowEquals: any;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private moviesService: MoviesService
    ) { }

   async ngOnInit() {
     this.movieName = this.formBuilder.group({
       title: ['']
     })
     await this.moviesService.movieName.subscribe(msg => {
       this.messageToShow = msg;
       this.ngOnInit();
     })
    this.getNowPlaying(this.messageToShow)
  }


  async getNowPlaying(movieName?) {
    try {
      this.moviesPopular = await this.moviesService.getNowPlaying()
    }catch(e) {
      console.log(e)
    }
    return null;
  }

  onClick() {
    this.routeActive = true
  }
}
