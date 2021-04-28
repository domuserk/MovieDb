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

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    HeaderComponent,
    PopularMoviesComponent
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
