import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
      video.muted = true;
      video.load();
      video.play().catch(err => {
        console.warn('Autoplay blockiert:', err);
      });
    });
  }
}
