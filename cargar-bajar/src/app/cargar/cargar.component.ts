import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.scss']
})
export class CargarComponent implements OnInit {

  archivo: any;
  nombre: string = '';
  tipo: string = '';
  serverResponse: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  enviarDatos(data: any) {
    const url = environment.API_CARGAR;
    const datos = {
      bin: this.archivo,
      nombre_archivo: this.nombre,
      tipo_archivo: this.tipo,
      mensaje: data.mensaje
    };
    this.http.post(url, datos, {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response' 
    }).subscribe({
      next: (response) => {
        if (response.status === 200 && response.ok) {
          this.serverResponse = "Archivo subido correctamente";
          alert("Archivo subido correctamente.");
        } 
      }
    });
  }

  convertirABase64(event: any): void {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        let base64 = e.target.result;
        const base64Pattern = /^data:.*?;base64,(.*)$/;
        const matches = base64.match(base64Pattern);
        if (matches) {
          base64 = matches[1];
        }
        this.archivo = base64;
        this.nombre = archivo.name;
        this.tipo = archivo.type;
        alert(`El archivo ${archivo.name} ha sido procesado.`);
      };
      reader.readAsDataURL(archivo);
    }
  }
  descargarArchivo(): void {
    this.router.navigate(['/']);
  }
}
