import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History {


    historyText: string = `The history of cinema is a journey that spans over a century, beginning in the late 19th century with the invention of motion picture technology. Early pioneers such as the Lumière brothers in France and Thomas Edison in the United States developed devices like the Cinématographe and the Kinetoscope, which allowed moving images to be recorded and projected to audiences. These first films were short, silent, and often depicted everyday scenes or simple comedic acts, but they laid the foundation for an entirely new art form. The silent film era, led by figures like Charlie Chaplin and Buster Keaton, demonstrated cinema’s power to tell stories without words, relying on expressive acting, visual humor, and innovative camera techniques. The introduction of synchronized sound in the late 1920s, marked by The Jazz Singer (1927), revolutionized the industry and ushered in the “talkies” era. Over the decades, cinema evolved alongside technological advances, from color film and widescreen formats to digital effects and streaming platforms. It has not only reflected but also influenced culture, politics, and society, becoming a powerful medium for storytelling, artistic expression, and mass communication around the world.`;



    historySections = [
    {
      title: 'The Birth of Cinema (1890s)',
      description: 'Cinema began in the late 19th century with pioneers like the Lumière brothers. The first motion pictures were short clips showing everyday life, captivating audiences with moving images.',
      image: 'assets/lumiere.jpeg'
    },
    {
      title: 'The Silent Era (1900s–1920s)',
      description: 'Silent films relied on expressive acting, title cards, and live music in theaters. Icons like Charlie Chaplin and Buster Keaton became global stars.',
      image: 'assets/silent.jpeg'
    },
    {
      title: 'The Golden Age of Hollywood (1930s–1950s)',
      description: 'The introduction of sound revolutionized cinema. Studios like MGM and Warner Bros. produced classics, and stars like Humphrey Bogart and Audrey Hepburn emerged.',
      image: 'assets/golden.jpeg'
    },
    {
      title: 'Modern Cinema (1970s–Present)',
      description: 'From the blockbuster era of Spielberg and Lucas to today’s streaming platforms, cinema continues to evolve with technology, storytelling, and global reach.',
      image: 'assets/modern.jpeg'
    }
  ];

}
