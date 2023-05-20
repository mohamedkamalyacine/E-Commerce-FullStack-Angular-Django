import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private _http:HttpClient) { }

  senData(formData:any){
    const _url = '127.0.0.1:8000/auth/';
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    console.log(headers);

    return this._http.post<any>(_url, formData, { headers });
  }
}
