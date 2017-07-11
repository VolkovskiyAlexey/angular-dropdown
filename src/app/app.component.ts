import { Component } from '@angular/core';
import {MoviesService} from "./models/movies/movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public movieNames = [];

  constructor(
    public moviesService: MoviesService
  ) {

  }

  ngOnInit() {

    this.moviesService.getList()
      .subscribe((res) => {
        this.movieNames = res.results.map((movie) => {
          return movie.title;
        })
      })

  }
}
