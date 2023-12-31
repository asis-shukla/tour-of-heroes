import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'https://doheemuzfnvxsrjpoxcj.supabase.co/rest/v1/heroes'; // URL to web api
  private apiKey =
    '';

  // Create a single supabase client for interacting with your database
  supabase = createClient(this.heroesUrl, this.apiKey);

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

  getHero(id: Number): Observable<Hero[]> {
    const findByIdURL = this.heroesUrl + `?select=*&id=eq.${id}`;

    this.messageService.add(`HeroService: fetched hero by id: ${id}`);

    return this.http.get<Hero[]>(findByIdURL, {
      headers: {
        apikey: this.apiKey,
      },
    });
  }
}
