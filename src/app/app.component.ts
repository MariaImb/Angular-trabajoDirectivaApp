import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:any;
  

  constructor(){

    this.entradas=[
      {titulo:"Python cada día mas presete"},
      {titulo:"Java presente desde hace 20 años"},
      {titulo:"JavaScript cada vez mas funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Donde quedo Pascal?"},
    ]
  }

  RegistrarUsuario(){
    this.registrado=true;
    this.mensaje="usuario registrado con exito"
  }
}
