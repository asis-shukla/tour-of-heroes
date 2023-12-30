import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const selectedHero = HEROES.find((hero: Hero) => hero.id === id);
    const hero = of(selectedHero ? selectedHero : HEROES[0]);
    this.messageService.add(`HeroService: fetched hero by id: ${id}`);
    return hero;
  }
}
