import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MoviesService } from '.././movies/services/movies.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() moviesSearch = new EventEmitter();

  movieName: FormGroup = new FormGroup({})
  movies: any;
  id: any;
  routeActive: boolean = false;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  nameMovie: string;
  title: string;
  loadingSecondCard: boolean = false;
  searchMovie: any;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
  ) { }

   ngOnInit() {
     this.movieName = this.formBuilder.group({
       title: ['']
     })
  }
  
  async sendMessage() {
    try {
      this.title = this.movieName.get('title').value;
      this.searchMovie = await this.moviesService.movieName.next(this.title)
      
    }catch (e) {
      console.log(e)
    }
    return;
  }
}