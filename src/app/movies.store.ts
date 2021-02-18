import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface Movie {
  name: string;
}

export interface MoviesState {
  movies: Movie[];
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  constructor() {
    super({ movies: [] });
  }
}
