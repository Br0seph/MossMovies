import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  $movieId: string;

  ngOnInit() {
    this.$movieId = this.route.snapshot.paramMap.get('movieId');
    debugger;
  }

}
