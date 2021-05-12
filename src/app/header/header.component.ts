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
  moviesSearch: string;
  
  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
   this.scrollDownEffect();
   this.moviesService.movieName.subscribe(msg => {
     this.moviesSearch = msg;
   })
  }

  async getMovieName(movieName?) {
   
  }
  scrollDownEffect() {
    window.onscroll = () => {
      const header = document.getElementById('nav');
      const githubIcon = document.getElementById('git')
      const moviesIcon = document.getElementById('movies')
      const signButton = document.getElementById('sign');

      if (window.scrollY > 80) {
        header.classList.add('white');
        githubIcon.classList.add('color-black');
        moviesIcon.classList.add('color-black');
        signButton.style.color = 'black'
      } else {
        header.classList.remove('white');
        githubIcon.classList.remove('color-black');
        githubIcon.classList.add('color-white');
        moviesIcon.classList.remove('color-black');
        moviesIcon.classList.add('color-white');
        signButton.removeAttribute("style");
      }
    }
  }
}
