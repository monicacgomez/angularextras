import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ServiceFicheros {
    urlApi = 'https://apipostfiles.azurewebsites.net/';
    
    constructor(private _http: HttpClient) {}
    async subirFicheroAsync(
    fileName: string,
    fileContent: string

): Promise<any> {
    let request = 'api/TestingFiles';
    
    let datos = {
        fileName: fileName,
        fileContent: fileContent
    };
    
    return firstValueFrom(
        this._http.post(this.urlApi + request, datos)
    );
}
}