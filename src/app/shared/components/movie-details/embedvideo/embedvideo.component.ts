import { SafePropertyRead } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Itrailer } from 'src/app/shared/model/movie';

@Component({
  selector: 'app-embedvideo',
  templateUrl: './embedvideo.component.html',
  styleUrls: ['./embedvideo.component.scss']
})
export class EmbedvideoComponent implements OnInit {
  trailerUrl!: SafeResourceUrl;
  @Input() key!: string;
  @Input() site!: string;
  
  constructor(private _sanitize: DomSanitizer) { }

  ngOnInit(): void {
    if (this.key) {
      const url = `https://www.youtube.com/embed/${this.key}`;
      this.trailerUrl = this._sanitize.bypassSecurityTrustResourceUrl(url)
    }
   
  }

}
