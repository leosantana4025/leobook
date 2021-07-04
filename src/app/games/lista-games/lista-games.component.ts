import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GamesService } from './../games.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Games } from '../games';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-games',
  templateUrl: './lista-games.component.html',
  styleUrls: ['./lista-games.component.css']
})

export class ListaGamesComponent implements OnInit {

  games!: Games;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.games = this.activatedRoute.snapshot.data['animais'];
    })
  }
}
