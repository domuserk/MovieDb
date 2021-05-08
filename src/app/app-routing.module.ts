import { TopRatedComponent } from './top-rated/top-rated.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpComingComponent } from './up-coming/up-coming.component';

const routes: Routes = [
  { path:'polular', component: PopularMoviesComponent },
  { path:'movies/:id', component: MoviesDetailsComponent },
  { path:'', component: MoviesComponent },
  { path: 'now_playing', component: NowPlayingComponent },
  { path: 'top_rated', component: TopRatedComponent },
  { path: 'up_coming', component: UpComingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
