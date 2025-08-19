import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe.pipe'; 

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './actors.html',
  styleUrls: ['./actors.css']
})
export class Actors {
  selectedVideoId: string | null = null;

  movies = [
    {
      name: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      image: '../../assets/godfather.jpeg',
      videoId: 'sY1S34973zA'
    },
    {
      name: 'Scarface',
      year: 1983,
      director: 'Brian De Palma',
      image: '../../assets/scarface.jpeg',
      videoId: '7pQQHnqBa2E'
    },
    {
      name: 'Scent of a Woman',
      year: 1992,
      director: 'Martin Brest',
      image: '../../assets/scent.jpeg',
      videoId: 'EaDz45LF9MM'
    }
  ];


   movies2 = [
    {
      title: 'Taxi Driver',
      director: 'Martin Scorsese',
      year: 1976,
      image: 'assets/taxi-driver.jpg',
      videoUrl: 'UUxD4-dEzn0'
    },
    {
      title: 'Raging Bull',
      director: 'Martin Scorsese',
      year: 1980,
      image: 'assets/raging-bull.jpg',
      videoUrl: 'yUHiVnT16kM'
    },
    {
      title: 'The Irishman',
      director: 'Martin Scorsese',
      year: 2019,
      image: 'assets/irishman.jpg',
      videoUrl: 'WHXxVmeGQUc'
    }
  ];

  




  playVideo(videoId: string) {
    this.selectedVideoId = videoId;
    
  }
}
