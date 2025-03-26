import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingService } from '../services/ranking.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  teilnehmer: string[] = ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Dunkle Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi',
    'Ness', 'Captain Falcon', 'Pummeluff', 'Peach', 'Daisy', 'Bowser', 'Ice Climbers', 'Shiek', 'Zelda',
    'Dr. Mario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'Junger Link', 'Ganondorf', 'Mewtu', 'Roy', 'Chrom',
    'Mr. Game & Watch', 'Meta Knight', 'Pit', 'Finsterer Pit', 'Zero Suit Samus', 'Wario', 'Snake', 'Ike',
    'Pokémon-Trainer', 'Diddy Kong', 'Lucas', 'Sonic', 'König Dedede', 'Olimar', 'Lucario', 'R.O.B.', 'Toon-Link',
    'Wolf', 'Bewohner', 'Mega Man', 'Wii Fit Trainer', 'Rosalina & Luma', 'Little Mac', 'Quajutsu', 'Mii Kämpfer',
    'Palutena', 'Pac-Man', 'Daraen', 'Shulk', 'Bowser Jr.', 'Duck Hunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 
    'Bayonetta', 'Inkling', 'Ridley', 'Simon', 'Richter', 'King K. Rool', 'Melinda', 'Fuegro', 'Piranha Pflanze',
    'Joker', 'Held', 'Banjo & Kazooie', 'Terry', 'Byleth', 'Min Min', 'Steve & Alex', 'Sephiroth', 'Pyra Mythra',
    'Kazuya', 'Sora'
  ];

  klassen = ['S', 'A', 'B', 'C', 'D', 'E'];
  meinung: Record<string, string> = {};
  user_id: string;

  constructor(private rankingService: RankingService) {
    this.user_id = localStorage.getItem('user_id') || this.generiereUserId();
    localStorage.setItem('user_id', this.user_id);
    this.ladeMeinung();
  }

  private generiereUserId(): string {
    return uuidv4();
  }

  async ladeMeinung() {
    try {
      const daten = await this.rankingService.getRankings(this.user_id);
      if (!daten?.length) return;

      daten.forEach(({ character_name, tier }) => {
        this.meinung[character_name] = tier;
      });
    } catch (err) {
      console.error("Fehler beim Abrufen:", err);
    }
  };


  async bestaetigung(teilnehmer: string, klasse: string) {
    if (this.meinung[teilnehmer]) return;
    try {
      await this.rankingService.saveRanking(this.user_id, teilnehmer, klasse);
      this.meinung[teilnehmer] = klasse;
    } catch (err) {
      console.error("Speicherfehler:", err);
    }
  }
  
  

   async entferneMeinung(teilnehmer: string) {
    try {
      await this.rankingService.deleteRanking(this.user_id, teilnehmer);
      delete this.meinung[teilnehmer];
    } catch (e) {
      console.error("Löschfehler:", e);
    }
  }

  ngOnInit() {
    const video = document.querySelector('.hintergrund') as HTMLVideoElement;
  
    if (video) {
      video.muted = true; // Safari-Fix
      video.play().catch(err => {
        console.warn("🔇 Autoplay blockiert:", err);
      });
    }
  }
  
}
