import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface Movie {
  name: string;
}

export interface MoviesState {
  movies: Movie[];
  authors: string[];
}

const initialState: MoviesState = {
  movies: [{ name: 'Titanic' }],
  authors: [],
};

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  constructor() {
    super(initialState);
  }

  readonly movies$: Observable<Movie[]> = this.select((state) => state.movies);

  readonly add = this.updater(
    (state, params: { movie: Movie; author: string }) => ({
      ...state,
      movies: [...state.movies, params.movie],
      authors: [...state.authors, params.author],
    })
  );

  readonly addMovie = this.updater((state, movie: Movie) => ({
    ...state,
    movies: [...state.movies, movie],
  }));

  readonly addAuthor = this.updater((state, author: string) => ({
    ...state,
    authors: [...state.authors, author],
  }));
}
