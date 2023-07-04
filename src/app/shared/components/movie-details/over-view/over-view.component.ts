import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from 'src/app/shared/model/movie';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {
@Input() movie!: Imovies;
  constructor() { }

  ngOnInit(): void {
  }

}
