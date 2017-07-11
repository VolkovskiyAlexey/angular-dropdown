import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ResponsesListModel} from "../responses/responses.model";
import {MoviesModel} from "./movies.model";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(
    public http: Http

  ) { }

  getList() : Observable<ResponsesListModel<MoviesModel>> {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=1c27e642d8cedef632716f85732ec043`)
      .map((res) => res.json());
  }

}
