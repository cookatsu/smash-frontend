import { Injectable } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Ranking } from '../shared/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  constructor(private backend: BackendService) {}

  getRankings(user_id: string): Promise<Ranking[]> {
    return this.backend.getAll(user_id);
  }

  saveRanking(user_id: string, character_name: string, tier: string): Promise<Ranking> {
    return this.backend.create({ user_id, character_name, tier });
  }

  deleteRanking(user_id: string, character_name: string): Promise<{ message: string }> {
    return this.backend.deleteOne(user_id, character_name);
  }
}
