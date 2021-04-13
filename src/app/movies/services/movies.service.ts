import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies:any;
  movie:any;
  constructor(private http: HttpClient) { }

  getMovies(movieName?:any) {
    const key = '6545757974aafd8d7cfda393f68879fd';
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}&page=1&include_adult=true`)
    .toPromise()
  }
   async getMovie( id?: number) {
     this.movies =  await this.getMovies()
     console.log('this.movies',this.movies)
     
      for(let i = 0; i < this.movies.results.length; i++) {
       let results = this.movies.results[i]
       if(results.id == id) {
         return results;
       }
     }
     return null;
  } 
}
