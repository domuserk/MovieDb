import { MoviesService } from './../movies/services/movies.service';
 

export abstract class Verifications {

   messageToShowEquals: any;
   messageToShow: any;

   constructor(private moviesService: MoviesService) {}
  
 
 }
 
