import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: any;
  movie: any;
  result: any;
  key: string = '6545757974aafd8d7cfda393f68879fd';
  credits: any;
  trending: any;
  constructor(private http: HttpClient) { }

  getMovies(movieName?:any) {
    return this.movies = this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${movieName}&page=1&include_adult=true`)
    .toPromise()
  }
   async getMovie( id?: number) {
      this.movie = await this.movies.then(
        el => this.result = el
      )
      console.log('result',this.result)

      for(let i = 0; i < this.result.results.length; i++) {
       let results = this.result.results[i]
       if(results.id == id) {
         return results;
       }
     }
     return null;
  } 
 async getCredits(id?) {
   return this.credits = await this.http.get(` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.key}&language=en-US`).toPromise()
  }
  async getTrending() {
    return this.trending = await this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.key}`).toPromise()
  }
}
