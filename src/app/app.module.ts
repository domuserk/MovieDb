import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { HeaderComponent } from './header/header.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchComponent } from './search/search.component';
import { NowPlayingComponent } from './now-plauing/now-playing.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpComingComponent } from './up-coming/up-coming.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    HeaderComponent,
    PopularMoviesComponent,
    SearchComponent,
    NowPlayingComponent,
    TopRatedComponent,
    UpComingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
