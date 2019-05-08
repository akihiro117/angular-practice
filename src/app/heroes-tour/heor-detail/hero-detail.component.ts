import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  // Hero型のオブジェクトを参照元から受け取る。
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
