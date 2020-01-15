import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private baseUrl = 'http://localhost:8080';


  headers = new HttpHeaders().append('Content-Type', 'application/json').append('Content-Type', 'multipart/form-data').append('enctype','multipart/form-data');
  httpOptions = {
    headers: this.headers
  };
  

  constructor(private http: HttpClient) { }

  getGenericList(url: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + url);
  }

  getGenericById(url: any, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + url + `/${id}`);
  }

  createGeneric(url: any, name: string, price: any, description: string, provider: string, image: File): Observable<any> {
   const formData: FormData = new FormData();
   formData.append("name", name),
   formData.append("price", price),
   formData.append("description", description),
   formData.append("provider", provider);
   formData.append("file", image);
    return this.http.post(`${this.baseUrl}` + url, formData);
  }

  updateGeneric(url: any, id: number, object: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}` + url + `/${id}`, object);
  }

  deleteGeneric(url: any, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + url + `/${id}`);
  }

}
