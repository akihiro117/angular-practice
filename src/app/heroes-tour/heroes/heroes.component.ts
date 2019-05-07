import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] = HEROES; 
  public selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
