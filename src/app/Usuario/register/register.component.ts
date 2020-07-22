import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Usuario } from 'src/app/Model/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private router:Router,
    private usuarioSerivece:UsuarioService) { }

  ngOnInit(): void {
  }

  Guardar(nombre:String, apellido: String, email: String){    
    this.usuario.nombre = nombre;
    this.usuario.apellido = apellido;
    this.usuario.email = email;
    this.usuarioSerivece.createUsuario(this.usuario)
    .subscribe(data => {Swal.fire('Usuario registrado con exito!!', 'success');
    this.router.navigate(["listar"]);
  })
  }

}
