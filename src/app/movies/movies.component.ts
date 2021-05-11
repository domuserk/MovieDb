import { MoviesService } from './services/movies.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() messageShow;
  movieName: FormGroup = new FormGroup({})
  movies: any;
  id:any;
  routeActive:boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title:string;
  loadingSecondCard: boolean = false;
  messageToShow: String;
  messageToShowEquals: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 5;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private _snackBar: MatSnackBar,
   
    ) { }

  async ngOnInit() {
    console.log('aquiFora')
    this.movieName = this.formBuilder.group ({
      title: ['']
    })

    if (this.messageToShow === undefined || this.messageToShow === '' ) {
      this.messageToShow = 'batman';
    } 

    this.getSearchBar()
    this.verifyEqualsSearch()
  }

  ngOnChanges(changes: SimpleChanges) {
    changes.messageToShow.currentValue
    console.log("Changes detected");
  }

  async getMovieName(movieName?) {
    try {
      return this.movies = await this.moviesService.getMovies(movieName)
      
    }catch(err) {
      this.openSnackBar()
      throw new Error(err)
    }
      return null;
  }

  onClick() {
   this.routeActive = true
  }

  openSnackBar() {
    this._snackBar.open('Faça Melhor', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  async getSearchBar() {
    if (this.messageToShow != undefined || this.messageToShow != '') {
      await this.moviesService.movieName.subscribe(msg => {
        this.messageToShow = msg;
        if (this.messageToShow != this.messageToShowEquals) {
          this.ngOnInit();
        }
      })
      this.getMovieName(this.messageToShow)
    }else {
      return null;
    }
  }
  
  async verifyEqualsSearch() {
    await this.moviesService.movieName.subscribe(msg => {
      this.messageToShowEquals = msg;
    })
    if (this.messageToShowEquals === this.messageToShow) return null;
  }
}
