import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Equipo } from "../models/equipo";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceEquipos {
    constructor(private _http: HttpClient) {}

    async getEquiposAsync(): Promise<Equipo[]> {
        let request = "api/equipos";
        let url = environment.apiEquipos + request;
        return firstValueFrom(
            this._http.get<Equipo[]>(url)
        )
    }
}