import { Component, OnInit } from '@angular/core';
import { Movie, MoviesStore } from './movies.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MoviesStore],
})
export class AppComponent implements OnInit {
  movies$ = this.moviesStore.movies$;

  constructor(private readonly moviesStore: MoviesStore) {}

  ngOnInit(): void {
    this.moviesStore.state$.subscribe((s) => console.log(s));
  }

  add(movieName: string, author: string): void {
    this.moviesStore.add({ movie: { name: movieName }, author });
    // this.moviesStore.addMovie({ name: movieName });
    // this.moviesStore.addAuthor(author);
  }
}
