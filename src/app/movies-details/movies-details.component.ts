import { MoviesService } from './../movies/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  id: any;
  result:any;
  filepath: string = 'https://image.tmdb.org/t/p/w500'
  filepathOriginal: string = 'https://image.tmdb.org/t/p/original'
  params: any;
  credits: any;
  trending:any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
    ) { }

  async ngOnInit() {
    this.route.params.subscribe(
    (params:any) => {
   this.id = params['id'];
   });
   this.route.params.subscribe(
    (params:any) => {
   this.params = params['popular'];
   });
   if(this.params == 'popular' ) {
     this.params = false;
   }else {
     this.params = true;
   }
   
    this.result = await this.moviesService.getMovie(this.id)
   
    this.credits = await this.moviesService.getCredits(this.id)

    this.trending = await this.moviesService.getTrending()
    console.log('trending',this.trending)
    console.log('credits',this.credits)
  }
  
  click() {

  }
}
