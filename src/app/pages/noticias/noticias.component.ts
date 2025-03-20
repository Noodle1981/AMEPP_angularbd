import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service'; // Importa el servicio
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importa CommonModule aquí
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias: any[] = []; // Array para almacenar las noticias

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    // Obtener noticias desde el backend al inicializar el componente
    this.newsService.getNews().subscribe(response => {
      this.noticias = response; // Asigna los datos al array
      console.log(this.noticias); // Opcional: Verifica las noticias en la consola
    });
  }
}

