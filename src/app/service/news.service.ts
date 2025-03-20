import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:5000/api/news'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para obtener todas las noticias
  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para crear una nueva noticia
  createNews(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Método para actualizar una noticia
  updateNews(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Método para eliminar una noticia
  deleteNews(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
