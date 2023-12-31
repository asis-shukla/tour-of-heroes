import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HeroService {
  private heroesUrl = 'https://doheemuzfnvxsrjpoxcj.supabase.co/rest/v1/heroes'; // URL to web api
  private apiKey =
    '';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl, {
      headers: {
        apikey: this.apiKey,
      },
    });
  }

  // getHero(id: Number): Observable<Hero> {
  //   const selectedHero = HEROES.find((hero: Hero) => hero.id === id);
  //   const hero = of(selectedHero ? selectedHero : HEROES[0]);
  //   this.messageService.add(`HeroService: fetched hero by id: ${id}`);
  //   return hero;
  // }

  getHero(id: Number): Observable<Hero> {
    const hero = of( HEROES[0]);
    this.messageService.add(`HeroService: fetched hero by id: ${id}`);
    return hero;
  }

  // /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
