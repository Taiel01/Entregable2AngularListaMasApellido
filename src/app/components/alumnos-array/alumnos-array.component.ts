import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos';

@Component({
  selector: 'app-alumnos-array',
  templateUrl: './alumnos-array.component.html',
  styleUrls: ['./alumnos-array.component.css']
})
export class AlumnosArrayComponent {
  personas: Alumno[] = [
    {
    nombre: "Taiel",
    edad: 21,
    nota: 9,
  },
  {
    nombre: "Lucas",
    edad: 22,
    nota: 4,
  },
  {
    nombre: "Juan",
    edad: 25,
    nota: 10,
  },
  {
    nombre: "Maria",
    edad: 19,
    nota: 2,
  },
  {
    nombre: "Sebastian",
    edad: 18,
    nota: 6,
  },
  {
    nombre: "Micaela",
    edad: 23,
    nota: 5,
  },
  {
    nombre: "Jose",
    edad: 31,
    nota: 10,
  }
]
}
