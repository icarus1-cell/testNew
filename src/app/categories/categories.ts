import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

    cinemaText: string = `The cinema category encompasses a vast and diverse range of artistic works, styles, and genres, reflecting the evolution of storytelling through moving images. It includes everything from blockbuster action films and epic historical dramas to intimate independent productions and experimental art-house pieces. Within this category, cinema can be further divided into genres such as drama, comedy, romance, thriller, horror, science fiction, and documentary, each catering to different emotional responses and audience expectations. Cinema is not just entertainment—it is also a cultural and historical archive, capturing societal values, struggles, and aspirations of the eras in which films are made. It merges visual artistry, sound design, music, and performance into a unified experience capable of evoking deep emotions, sparking conversations, and inspiring change. The technical aspects of cinema, such as cinematography, editing, special effects, and production design.`;



    categories = [
    {
      name: 'Drama',
      description: 'Emotional storytelling exploring human experiences.',
      rating: 0,
      image: 'assets/drama.jpeg',
      imdb: 'https://www.imdb.com/title/tt0111161/'
    },
    {
      name: 'Comedy',
      description: 'Light-hearted films designed to amuse and entertain.',
      rating: 0,
      image: 'assets/comedy.jpeg',
      imdb: 'https://www.imdb.com/title/tt0107048/'
    },
    {
      name: 'Action',
      description: 'High-energy sequences, stunts, and adventure.',
      rating: 0,
      image: 'assets/action.jpeg',
       imdb: 'https://www.imdb.com/title/tt2911666/'
    },
    {
      name: 'Horror',
      description: 'Films designed to thrill, shock, or scare.',
      rating: 0,
      image: 'assets/horror.jpeg',
       imdb: 'https://www.imdb.com/title/tt0081505/'
    }
  ];

   rateMovie(categoryIndex: number, star: number) {
    this.categories[categoryIndex].rating = star;
  }

     openIMDB(url: string) {
    window.open(url, '_blank');
  }
  
}


