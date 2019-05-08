import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './heor-detail.component.html',
  styleUrls: ['./heor-detail.component.sass']
})
export class HeorDetailComponent implements OnInit {

  // Hero型のオブジェクトを参照元から受け取る。
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
