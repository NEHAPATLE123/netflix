import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Imovies, Itrailer } from '../../model/movie';
import { MoviesService } from '../../service/movies.service';
import { first } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId!: string;
  moviedetails!: Imovies;
  moviesTrailers!: Array<Itrailer>;
  trailerUrl!: SafeResourceUrl;


  constructor(private _route: ActivatedRoute,
    private _movieService: MoviesService,
    private _sanitizer: DomSanitizer) { }

    // runTrailer(key: string) {
    //   console.log(key);
    //   // let url = `https://www.youtube.com/embed/${key}`
    //   // this.trailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    // }
  

  ngOnInit(): void {
    this._route.params
      .pipe(first())
      .subscribe((params: Params) => {
        this.movieId = params['movieId'];
        console.log(this.movieId)
        if (this.movieId) {
          this._movieService.getMovieDetaisl(this.movieId)
            .subscribe(res => {
              this.moviedetails = res;
            })
          this._movieService.getMovieTrailer(this.movieId)
            .subscribe(trailers => {
              console.log('trailer', trailers);
              this.moviesTrailers = trailers
            }) }
      }  )
  }

  runTrailer(key: string) {
    console.log(key);
    let url = `https://www.youtube.com/embed/${key}`
    this.trailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
