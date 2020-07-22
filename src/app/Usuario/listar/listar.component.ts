import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Usuario } from 'src/app/Model/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: []
})
export class ListarComponent implements OnInit {

  usuarios:Usuario [];

  constructor(
    private service:UsuarioService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.service.getUsuario()
    .subscribe(data => {
      this.usuarios = data;
    })
  }

  Editar(usuario:Usuario){
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["edit"])
  }

  Delete (usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data => {
      this.service.getUsuario()
      .subscribe(data => {
      this.usuarios = data;
    })
      //this.usuarios=this.usuarios.filter(p=>p!==usuario);
      //alert("Usuario eliminado...")
      Swal.fire('Usuario Borrado con éxito!!','error');
    })
  }
}
