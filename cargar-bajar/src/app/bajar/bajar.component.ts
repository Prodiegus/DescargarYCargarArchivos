import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // Asegúrate de importar el entorno correcto
import { Router } from '@angular/router';

@Component({
  selector: 'app-bajar',
  templateUrl: './bajar.component.html',
  styleUrls: ['./bajar.component.scss']
})
export class BajarComponent implements OnInit {
  respuestaJson: any; // Aquí guardaremos la respuesta JSON

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
    this.router.navigate(['/']);
  }
}