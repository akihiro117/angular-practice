import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../common/messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  // mockからheroの配列を取得。
  public getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  public getHero(id: number): Observable<Hero> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
