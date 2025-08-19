import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const bootstrap: any;

@Component({
  selector: 'app-directors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directors.html',
  styleUrls: ['./directors.css']
})
export class Directors {
  directors = [
  {
    name: 'Christopher Nolan',
    image: 'assets/nolan1.jpeg',
    description: 'Visionary director behind Inception, Interstellar, and Oppenheimer.',
    modalInfo: 'Nolan explores time, identity, and memory in his films.',
    imdb: 'https://www.imdb.com/name/nm0634240/',
    buttonColor: 'dark'
  },
  {
    name: 'Quentin Tarantino',
    image: 'assets/tarentino1.jpeg',
    description: 'Famous for cult classics like Pulp Fiction and Kill Bill.',
    modalInfo: 'Tarantino blends humor, violence, and unforgettable dialogue.',
    imdb: 'https://www.imdb.com/name/nm0000233/',
    buttonColor: 'danger'
  },
  {
    name: 'David Fincher',
    image: 'assets/fincher1.jpeg',
    description: 'Known for dark, gripping films like Fight Club and Gone Girl.',
    modalInfo: 'Fincher’s style is sleek, obsessive, and psychologically intense.',
    imdb: 'https://www.imdb.com/name/nm0000399/',
    buttonColor: 'secondary'
  }
];


  selectedDirector: any = null;

  openModal(director: any) {
  this.selectedDirector = director;

  const modalElement = document.getElementById('directorModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
}
