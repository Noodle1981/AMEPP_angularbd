import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; // Importaciones necesarias
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Importa ReactiveFormsModule para habilitar formularios reactivos
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent {
  form: FormGroup; // Declaración del formulario reactivo

  constructor(private fb: FormBuilder) { // Inyecta FormBuilder
    // Inicializa el formulario con los campos necesarios
    this.form = this.fb.group({
      title: [''], // Campo para el título
      image: [''], // Campo para la imagen
      body: ['']   // Campo para el contenido
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    const formData = new FormData(); // Usamos FormData para manejar el archivo y los datos
    formData.append('title', this.form.get('title')?.value);
    formData.append('body', this.form.get('body')?.value);
    const fileInput = this.form.get('image')?.value;
    if (fileInput instanceof File) {
      formData.append('image', fileInput); // Adjunta el archivo real
    }
  
    console.log('Datos del formulario:', formData);
    // Aquí puedes enviar formData al backend
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.form.patchValue({ image: file }); // Actualiza el campo "image" con el archivo seleccionado
    }
  }
  


}

