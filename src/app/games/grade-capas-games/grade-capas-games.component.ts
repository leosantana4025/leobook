import { Component, Input, OnInit } from '@angular/core';
import { Games } from '../games';

@Component({
  selector: 'app-grade-capas-games',
  templateUrl: './grade-capas-games.component.html',
  styleUrls: ['./grade-capas-games.component.css']
})

export class GradeCapasGamesComponent implements OnInit {

  @Input() games !: Games;

  constructor() { }

  ngOnInit(): void {
  }

}
