import { Component, OnInit } from '@angular/core';
import { MoviesService } from '.././movies/services/movies.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movieName: FormGroup = new FormGroup({})
  movies: any;
  id: any;
  routeActive: boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title: string;
  loadingSecondCard: boolean = false;
  
  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
   this.scrollDownEffect();
  }

  async getMovieName(movieName?) {
   
  }
  scrollDownEffect() {
    window.onscroll = () => {
      const header = document.getElementById('nav');
      if (window.scrollY > 80) {
        header.classList.add('white');
      } else {
        header.classList.remove('white');
      }
    }
  }
}
