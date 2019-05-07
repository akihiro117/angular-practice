import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  public hero: Hero = {
    id: 1,
    name: 'windstorm'
  }
  constructor() { }

  ngOnInit() {
  }

}
