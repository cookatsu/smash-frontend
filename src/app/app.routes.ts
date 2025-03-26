import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KaempferComponent } from './kaempfer/kaempfer.component';
import { RankingComponent } from './ranking/ranking.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kaempfer', component: KaempferComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
