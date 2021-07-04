import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  private urlOriginal = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/photos/${url}`;
    }
  }

  @Input() descricao = '';

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
