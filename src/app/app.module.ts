import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http';
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component'
import { MaterialModule } from './material/material.module';
import { OverViewComponent } from './shared/components/movie-details/over-view/over-view.component';
import { EmbedvideoComponent } from './shared/components/movie-details/embedvideo/embedvideo.component';
import { MoviePhotosComponent } from './shared/components/movie-details/movie-photos/movie-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    NavbarComponent,
    MovieDetailsComponent,
    DashboardComponent,
    OverViewComponent,
    EmbedvideoComponent,
    MoviePhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
