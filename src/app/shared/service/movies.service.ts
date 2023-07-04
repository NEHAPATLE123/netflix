import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovies, ImoviesResp, Itrailer, ItrailerRes } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.apiKey;

  constructor(private _http: HttpClient) { }

  getTrendingMovies(): Observable<Imovies[]> {
    let trendingMovies = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`; //api_key=${this.apiKey}`= 'HttpParams'

    return this._http.get<ImoviesResp>(trendingMovies)
      .pipe(
        map(res => res.results)
      )
  }

  getMovieDetaisl(id: string): Observable<Imovies> {
    let detaislUrl = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this._http.get<Imovies>(detaislUrl)
  }
  getMovieTrailer(id: string): Observable<Itrailer[]> {
    let detaislUrl = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`;
    return this._http.get<ItrailerRes>(detaislUrl)
      .pipe(
        map(res => res.results)
      );
  }


}
