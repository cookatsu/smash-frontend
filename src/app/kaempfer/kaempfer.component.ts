import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-kaempfer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kaempfer.component.html',
  styleUrls: ['./kaempfer.component.css']
})
export class KaempferComponent {
  
  fighters = [
    { name: 'Mario', image: 'mario.png', trailerUrl: 'https://www.youtube.com/embed/INk1W8OujQI', release: 1 },
    { name: 'Donkey Kong', image: 'donkey-kong.png', trailerUrl: 'https://www.youtube.com/embed/K7IsUGeFXP0', release: 2 },
    { name: 'Link', image: 'link.png', trailerUrl: 'https://www.youtube.com/embed/kfeUdBi67G4', release: 3 },
    { name: 'Samus', image: 'samus.png', trailerUrl: 'https://www.youtube.com/embed/I9tcvSeemVo', release: 4 },
    { name: 'Dunkle Samus', image: 'dunkle-samus.png', trailerUrl: 'https://www.youtube.com/embed/sXG-oI6VChg', release: 5 },
    { name: 'Yoshi', image: 'yoshi.png', trailerUrl: 'https://www.youtube.com/embed/bQsMQankmEs', release: 6 },
    { name: 'Kirby', image: 'kirby.png', trailerUrl: 'https://www.youtube.com/embed/1FPJs_c3qY4', release: 7 },
    { name: 'Fox', image: 'fox.png', trailerUrl: 'https://www.youtube.com/embed/Arw6c0dJHAE', release: 8 },
    { name: 'Pikachu', image: 'pikachu.png', trailerUrl: 'https://www.youtube.com/embed/7LfEvnLc3mI', release: 9 },
    { name: 'Luigi', image: 'luigi.png', trailerUrl: 'https://www.youtube.com/embed/LlNXKM3sHWU', release: 10 },
    { name: 'Ness', image: 'ness.png', trailerUrl: 'https://www.youtube.com/embed/jtlUHmonMGQ', release: 11 },
    { name: 'Captain Falcon', image: 'captain-falcon.png', trailerUrl: 'https://www.youtube.com/embed/ayUTQsO6d1E', release: 12 },
    { name: 'Pummeluff', image: 'pummeluff.png', trailerUrl: 'https://www.youtube.com/embed/IlojAAwCfoA', release: 13 },
    { name: 'Peach', image: 'peach.png', trailerUrl: 'https://www.youtube.com/embed/ETVQLZV7J8g', release: 14 },
    { name: 'Daisy', image: 'daisy.png', trailerUrl: 'https://www.youtube.com/embed/YyzJnpX2ZcY', release: 15 },
    { name: 'Bowser', image: 'bowser.png', trailerUrl: 'https://www.youtube.com/embed/liuwszyDhXM', release: 16 },
    { name: 'Ice Climbers', image: 'ice-climber.png', trailerUrl: 'https://www.youtube.com/embed/FUzcsIjn4LY', release: 17 },
    { name: 'Shiek', image: 'shiek.png', trailerUrl: 'https://www.youtube.com/embed/cCQXBEiARns', release: 18 },
    { name: 'Zelda', image: 'zelda.png', trailerUrl: 'https://www.youtube.com/embed/fMDgFn3qQ_c', release: 19 },
    { name: 'Dr. Mario', image: 'dr-mario.png', trailerUrl: 'https://www.youtube.com/embed/w0qVpaEtEF4', release: 20 },
    { name: 'Pichu', image: 'pichu.png', trailerUrl: 'https://www.youtube.com/embed/9ZD89yfBCyE', release: 21 },
    { name: 'Falco', image: 'falco.png', trailerUrl: 'https://www.youtube.com/embed/rJj9J5MW8xg', release: 22 },
    { name: 'Marth', image: 'marth.png', trailerUrl: 'https://www.youtube.com/embed/icuBIlBPYj0', release: 23 },
    { name: 'Lucina', image: 'lucina.png', trailerUrl: 'https://www.youtube.com/embed/vQqvKaCne4k', release: 24 },
    { name: 'Junger Link', image: 'junger-link.png', trailerUrl: 'https://www.youtube.com/embed/qpzDPfCzB7g', release: 25 },
    { name: 'Ganondorf', image: 'ganondorf.png', trailerUrl: 'https://www.youtube.com/embed/Q7pzoLQlrsM', release: 26 },
    { name: 'Mewtu', image: 'mewtu.png', trailerUrl: 'https://www.youtube.com/embed/BcCpZHVIv9Q', release: 27 },
    { name: 'Roy', image: 'roy.png', trailerUrl: 'https://www.youtube.com/embed/FtDn6HBn_Qk', release: 28 },
    { name: 'Chrom', image: 'chrom.png', trailerUrl: 'https://www.youtube.com/embed/733o521fbdE', release: 29 },
    { name: 'Mr. Game & Watch', image: 'mr-game-watch.png', trailerUrl: 'https://www.youtube.com/embed/Ic0xR07DhSY', release: 30 },
    { name: 'Meta Knight', image: 'meta-knight.png', trailerUrl: 'https://www.youtube.com/embed/A99IYmm50RY', release: 31 },
    { name: 'Pit', image: 'pit.png', trailerUrl: 'https://www.youtube.com/embed/M_Pszs9I7S4', release: 32 },
    { name: 'Finsterer Pit', image: 'finsterer-pit.png', trailerUrl: 'https://www.youtube.com/embed/q2hJjyP8FGA', release: 33 },
    { name: 'Zero Suit Samus', image: 'zero-suit-samus.png', trailerUrl: 'https://www.youtube.com/embed/Y4PTxiq11Fk', release: 34 },
    { name: 'Wario', image: 'wario.png', trailerUrl: 'https://www.youtube.com/embed/4lK7zkTInNA', release: 35 },
    { name: 'Snake', image: 'snake.png', trailerUrl: 'https://www.youtube.com/embed/7NLKrPYYQt0', release: 36 },
    { name: 'Ike', image: 'ike.png', trailerUrl: 'https://www.youtube.com/embed/-aV6h3jWO6c', release: 37 },
    { name: 'Pokémon-Trainer', image: 'pokemon-trainer.png', trailerUrl: 'https://www.youtube.com/embed/dYpf9FoPN_M', release: 38 },
    { name: 'Diddy Kong', image: 'diddy-kong.png', trailerUrl: 'https://www.youtube.com/embed/AjywYr-fuqY', release: 39 },
    { name: 'Lucas', image: 'lucas.png', trailerUrl: 'https://www.youtube.com/embed/GWjfyyGNL8c', release: 40 },
    { name: 'Sonic', image: 'sonic.png', trailerUrl: 'https://www.youtube.com/embed/138MW7zOw0M', release: 41 },
    { name: 'König Dedede', image: 'koenig-dedede.png', trailerUrl: 'https://www.youtube.com/embed/bikxqlRPN64', release: 42 },
    { name: 'Olimar', image: 'olimar.png', trailerUrl: 'https://www.youtube.com/embed/AFHgO8rMzcg', release: 43 },
    { name: 'Lucario', image: 'lucario.png', trailerUrl: 'https://www.youtube.com/embed/7gfpUgrLEwo', release: 44 },
    { name: 'R.O.B.', image: 'rob.png', trailerUrl: 'https://www.youtube.com/embed/NqL7m9CuGD0', release: 45 },
    { name: 'Toon-Link', image: 'toon-link.png', trailerUrl: 'https://www.youtube.com/embed/62uBiZfw9w0', release: 46 },
    { name: 'Wolf', image: 'wolf.png', trailerUrl: 'https://www.youtube.com/embed/YLG2LGY95f4', release: 47 },
    { name: 'Bewohner', image: 'bewohner.png', trailerUrl: 'https://www.youtube.com/embed/wY_wCijU1Pk', release: 48 },
    { name: 'Mega Man', image: 'mega-man.png', trailerUrl: 'https://www.youtube.com/embed/m4632ulEnNc', release: 49 },
    { name: 'Wii Fit Trainer', image: 'wii-fit-trainer.png', trailerUrl: 'https://www.youtube.com/embed/kJbHRv4nCBw', release: 50 },
    { name: 'Rosalina & Luma', image: 'rosalina-luma.png', trailerUrl: 'https://www.youtube.com/embed/JX2mySkglVU', release: 51 },
    { name: 'Little Mac', image: 'little-mac.png', trailerUrl: 'https://www.youtube.com/embed/vBM09wj8xwE', release: 52 },
    { name: 'Quajutsu', image: 'quajutsu.png', trailerUrl: 'https://www.youtube.com/embed/rMCn8NuATaE', release: 53 },
    { name: 'Mii Kämpfer', image: 'mii-kaempfer.png', trailerUrl: 'https://www.youtube.com/embed/qdSKO-mc2n8', release: 54 },
    { name: 'Palutena', image: 'palutena.png', trailerUrl: 'https://www.youtube.com/embed/0yD_B4ZkdME', release: 55 },
    { name: 'Pac-Man', image: 'pac-man.png', trailerUrl: 'https://www.youtube.com/embed/NPzo-TuH0C0', release: 56 },
    { name: 'Daraen', image: 'daraen.png', trailerUrl: 'https://www.youtube.com/embed/QBxtnTgUwcM', release: 57 },
    { name: 'Shulk', image: 'shulk.png', trailerUrl: 'https://www.youtube.com/embed/XWeR6XmzZyI', release: 58 },
    { name: 'Bowser Jr.', image: 'bowser-jr.png', trailerUrl: 'https://www.youtube.com/embed/fZ2dm9EoJfE', release: 59 },
    { name: 'Duck Hunt', image: 'duck-hunt.png', trailerUrl: 'https://www.youtube.com/embed/anhjSVXYL6E', release: 60 },
    { name: 'Ryu', image: 'ryu.png', trailerUrl: 'https://www.youtube.com/embed/9LAjpoI-ap8', release: 61 },
    { name: 'Ken', image: 'ken.png', trailerUrl: 'https://www.youtube.com/embed/9_tQRugeXik', release: 62 },
    { name: 'Cloud', image: 'cloud.png', trailerUrl: 'https://www.youtube.com/embed/hccjmuujoD4', release: 63 },
    { name: 'Corrin', image: 'corrin.png', trailerUrl: 'https://www.youtube.com/embed/7B4w2Tsy9PE', release: 64 },
    { name: 'Bayonetta', image: 'bayonetta.png', trailerUrl: 'https://www.youtube.com/embed/oYe8HpzYebg', release: 65 },
    { name: 'Inkling', image: 'inkling.png', trailerUrl: 'https://www.youtube.com/embed/O4-7-bJWUsc', release: 66 },
    { name: 'Ridley', image: 'ridley.png', trailerUrl: 'https://www.youtube.com/embed/EDi1Zf_vJsY', release: 67 },
    { name: 'Simon', image: 'simon.png', trailerUrl: 'https://www.youtube.com/embed/RY7WL-n1atg', release: 68 },
    { name: 'Richter', image: 'richter.png', trailerUrl: 'https://www.youtube.com/embed/ELrWbGScgwU', release: 69 },
    { name: 'King K. Rool', image: 'king-k-rool.png', trailerUrl: 'https://www.youtube.com/embed/pKcXgSV8PTE', release: 70 },
    { name: 'Melinda', image: 'melinda.png', trailerUrl: 'https://www.youtube.com/embed/ML8fn3eInnc', release: 71 },
    { name: 'Fuegro', image: 'fuegro.png', trailerUrl: 'https://www.youtube.com/embed/eE6Agn9d89U', release: 72 },
    { name: 'Piranha Pflanze', image: 'piranha-pflanze.png', trailerUrl: 'https://www.youtube.com/embed/3sZsk8VHY2g', release: 73 },
  { name: 'Joker', image: 'joker.png', trailerUrl: 'https://www.youtube.com/embed/W4PG9qx9x2s', release: 74 },
  { name: 'Held', image: 'held.png', trailerUrl: 'https://www.youtube.com/embed/pupll3ON-WA', release: 75 },
  { name: 'Banjo & Kazooie', image: 'banjo-kazooie.png', trailerUrl: 'https://www.youtube.com/embed/qyJ4djjQOr0', release: 76 },
  { name: 'Terry', image: 'terry.png', trailerUrl: 'https://www.youtube.com/embed/lvT-b5y9tsE', release: 77 },
  { name: 'Byleth', image: 'byleth.png', trailerUrl: 'https://www.youtube.com/embed/6fwAk1P8TLU', release: 78 },
  { name: 'Min Min', image: 'min-min.png', trailerUrl: 'https://www.youtube.com/embed/dKR_w6C5A5k', release: 79 },
  { name: 'Steve & Alex', image: 'steve-alex.png', trailerUrl: 'https://www.youtube.com/embed/90Jve_qWnpc', release: 80 },
  { name: 'Sephiroth', image: 'sephiroth.png', trailerUrl: 'https://www.youtube.com/embed/JPxcE1dMqL8', release: 81 },
  { name: 'Pyra Mythra', image: 'pyra-mythra.png', trailerUrl: 'https://www.youtube.com/embed/cHh87caenKw', release: 82 },
  { name: 'Kazuya', image: 'kazuya.png', trailerUrl: 'https://www.youtube.com/embed/KctzAagM0H8', release: 83 },
  { name: 'Sora', image: 'sora.png', trailerUrl: 'https://www.youtube.com/embed/82Q2XTJ8jWk', release: 84 }

  ];

  isDescending: boolean = true;
  selectedFighter: { name: string; trailerUrl: SafeResourceUrl } | null = null;
  
  
  
  constructor(private sanitizer: DomSanitizer) {
    this.applySortOrder();
  }

  toggleSort() {
    this.isDescending = !this.isDescending;
    this.applySortOrder();
  }

  private applySortOrder() {
    this.fighters.sort((a, b) =>
      this.isDescending ? b.release - a.release : a.release - b.release
    );
  }

  openTrailer(fighterName: string) {
    const data = this.fighters.find(f => f.name === fighterName);
    if (!data) return;

    this.selectedFighter = {
      name: data.name,
      trailerUrl: this.sanitizer.bypassSecurityTrustResourceUrl(data.trailerUrl)
    };
  }

  closeTrailer = () => this.selectedFighter = null;
}
