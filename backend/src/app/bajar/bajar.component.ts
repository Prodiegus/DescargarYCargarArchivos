import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bajar',
  templateUrl: './bajar.component.html',
  styleUrls: ['./bajar.component.scss']
})
export class BajarComponent implements OnInit {
  respuestaJson: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.http.get<any>(environment.API_BAJAR).subscribe({
      next: (data) => {
        this.respuestaJson = data;
      },
      error: (error) => console.error('Hubo un error al cargar los datos', error)
    });
  }

  cargar(): void {
    this.router.navigate(['/cargar']);
  }

  async descargarArchivo(base64: string, nombreArchivo: string, tipo_archivo: string): Promise<void> {
  console.log("Archivo a descargar: ", nombreArchivo, "\ntipo: ", tipo_archivo, "\nbase64: ", base64);

  const base64Pattern = /^data.*?\/.*?base64,(.*)$/;
  const matches = base64.match(base64Pattern);
  const base64Cleaned = matches ? matches[1] : base64; 
  console.log("base limpiada: ", base64Cleaned);

  const byteCharacters = atob(base64Cleaned);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], { type: tipo_archivo });
  console.log("blob", blob);

  try {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error al descargar el archivo:', error);
  }
}
}