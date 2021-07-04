import { GamesService } from './../games.service';
import { Game } from './../games';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-game',
  templateUrl: './detalhe-game.component.html',
  styleUrls: ['./detalhe-game.component.css']
})

export class DetalheGameComponent implements OnInit {

  gameID!: number;
  game$!: Observable<Game>;

  constructor(private gamesService: GamesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.gameID = this.activatedRoute.snapshot.params.gameID;
    this.game$ = this.gamesService.buscaPorId(this.gameID);
  }

  curtir() {
    this.gamesService.curtir(this.gameID).subscribe((curtida) => {
      if (curtida) {
        this.game$ = this.gamesService.buscaPorId(this.gameID);
      }
    })
  }

  excluir() {
    this.gamesService.excluiGame(this.gameID).subscribe(() => {
      this.router.navigate(['/games/']);
    }, (error) => console.log(error));
  }
}
