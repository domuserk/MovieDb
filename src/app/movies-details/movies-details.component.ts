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
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
    (params:any) => {
   this.id = params['id'];
   });
   console.log('id',this.id)

   this.moviesService.getMovie(this.id).then(
     el => this.result = el
   )
   console.log(this.result)
  }
}
