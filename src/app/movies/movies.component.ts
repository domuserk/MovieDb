import { MoviesService } from './services/movies.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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
  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
    ) { }

  async ngOnInit() {

    this.movieName = this.formBuilder.group ({
      title: ['']
    })
    await this.moviesService.movieName.subscribe(msg => {
      this.messageToShow = msg;
      this.ngOnInit();
    })

    console.log('messagetoShow', this.messageToShow)
    this.getMovieName(this.messageToShow)

  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  async getMovieName(movieName?) {
   
    console.log('dentro',movieName)
    try {
      return this.movies = await this.moviesService.getMovies(movieName)
    }catch(err) {
      console.log(err)
    }
      return null;
  }
  onClick() {
   this.routeActive = true
  }
}
