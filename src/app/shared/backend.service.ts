import { Injectable } from '@angular/core';
import { Ranking } from './ranking';

@Injectable({ providedIn: 'root' })
export class BackendService {
  private api = 'http://localhost:3000';

  getAll = async (uid: string): Promise<Ranking[]> =>
    await (await fetch(`${this.api}/ranking?user_id=${uid}`)).json();

  create = async (data: Ranking): Promise<Ranking> =>
    await (await fetch(`${this.api}/ranking`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })).json();

  deleteOne = async (uid: string, name: string): Promise<{ message: string }> =>
    await (await fetch(`${this.api}/ranking/${uid}/${name}`, {
      method: 'DELETE'
    })).json();
}
