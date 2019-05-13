import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[]; 

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(rcvHeres => this.heroes = rcvHeres);
  }

  public add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push();
      });
  }

}
