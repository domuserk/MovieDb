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
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
    ) { }

  async ngOnInit() {
    this.route.params.subscribe(
    (params:any) => {
   this.id = params['id'];
   });

   await this.moviesService.getMovie(this.id).then(
     el => this.result = el
   )
   console.log(this.result)
  }
  click() {
    
  }
}
