import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/MSA/usuario';

  getUsuario(){
    return this.http.get<Usuario[]>(this.Url);
  }
  getUsuarioID(id:String){
    return this.http.get<Usuario>(this.Url+"/"+id);
  }
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url,usuario);
  }
  actualizarUsuario(usuario:Usuario, id:any){
    return this.http.put<Usuario>(this.Url+"/"+id,usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.Url+"/"+usuario.id);
  }
}
