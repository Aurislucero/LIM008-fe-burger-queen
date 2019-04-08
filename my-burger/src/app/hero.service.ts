import { Injectable } from '@angular/core';
import { Home } from './home';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Home[] {
    return HEROES;
  }
}
