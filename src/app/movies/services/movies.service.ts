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
  popular: any;
  nowPlaying:any;
  topRated:any;
  upComing:any;
  allMovies: any;
  allMoviesResults:any;
  resultAll:any;

  constructor(private http: HttpClient) { }

  getMovies(movieName?:any) {
    return this.movies = this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${movieName}&page=1&include_adult=true`)
    .toPromise()
  }
  
  async getAllMovies(id?) {
     
    return this.allMovies = this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`)
      .toPromise()
  
  }
   async getMovie( id?: number) {
      this.movie = await this.movies

      const result = this.movie;

      console.log('result',result)
      for(let i = 0; i < result.results.length; i++) {
       let results = result.results[i]
        if (results.id == id) {
          return results;
        } 
    }
     return;
  } 

  async getCredits(id?) {
   return this.credits = await this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.key}&language=en-US`).toPromise()
  }

  async getPopular() {
    return this.popular = await this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}`).toPromise()
  }

  async getNowPlaying() {
    return this.nowPlaying = await this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.key}`).toPromise()
  }

  async getTopRated() {
    return this.topRated = await this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}`).toPromise()
  }

  async getupComing() {
    return this.upComing = await this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.key}`).toPromise()
  }
}
