import { Declaration } from './../../modules/garbage-collector/model/declaration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  form: Object = {
    dumpsterId: 2,
    fkUserId: 1,
    category: 'efdzfd',
    imageSrc: 'ezfzefz',
    content: 'zefzf',
    title: 'zefzefezf'
  }

  url = 'https://127.0.0.1:8000/api/addSupport';
  constructor(private http: HttpClient) { }

  postDeclaration(declaration: Object) {
    console.log(declaration);

    return this.http.post(this.url, JSON.stringify(this.form));
  }
}
