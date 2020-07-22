import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Usuario } from 'src/app/Model/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: []
})
export class EditComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){    
    let id=localStorage.getItem("id");
    this.usuarioService.getUsuarioID(id)
    .subscribe(data => {
      this.usuario = data;
    })
  }

  Actualizar (usuario:Usuario){
    let id=localStorage.getItem("id");
    this.usuarioService.actualizarUsuario(usuario, id)
    .subscribe(data => {
      this.usuario=data;
      console.log(data);
      Swal.fire('Usuario actualizado con exito!!','success');
      this.router.navigate(["listar"]);
    })
  }
}