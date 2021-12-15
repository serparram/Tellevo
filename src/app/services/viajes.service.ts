import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Viajes } from './../interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  public api = 'https://raw.githubusercontent.com/serparram/Tellevo/main/db.json';

  constructor( public http: HttpClient,) {
   }
   getAllViajes() {
    const path = `${this.api}`;
    return this.http.get<Viajes[]>(path);
  }

  getViaje(id: string) {
    const path = `${this.api}${id}`;
    return this.http.get<Viajes>(path);
  }

  createViaje(viaje: Viajes) {
    const path = `${this.api}`;
    return this.http.post(path, viaje);
  }
  deleteViaje(id: string) {
    const path = `${this.api}${id}`;
    return this.http.delete(path);
  }
}

