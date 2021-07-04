import { switchMap, take } from 'rxjs/operators';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { GamesService } from './../games.service';
import { Injectable } from "@angular/core";
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from "rxjs";
import { Games } from '../games';

@Injectable({
  providedIn: 'root'
})
export class ListaGamesResolver implements Resolve<Games> {

  constructor(private gamesService: GamesService, private usuarioService: UsuarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Games> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.gamesService.listaDoUsuario(userName);
      }),
      take(1)
    )
  }
}
