import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: any[] = [
    {
      rut: '12345678-k',
      nombre: 'admin',
      correo: 'admin@duocuc.cl',
      password: 'admin123',
      confirmpassword: 'admin123',
      fecha: '2003-01-01',
      genero: 'Otro',
      tipo_user: 'Administrador',
      tiene_Auto: 'No',
      marca: '',
      patente: ''
    }
  ];

  private tipo: string = "";
  
  private usuarioAutenticado: any = null;
  constructor() { }

  public crearPersona(personita: any): boolean {
    if (this.getPersona(personita.rut) === undefined) {
      this.usuarios.push(personita);
      return true;
    }
    return false;
  }

  public getCorreo(correo2: string){
    return this.usuarios.find(elemento => elemento.correo === correo2);
  }

  public getPassword(password2: string){
    return this.usuarios.find(elemento => elemento.password === password2);
  }

  public getPersona(rut: string) {
    return this.usuarios.find(elemento => elemento.rut === rut);
  }

  public getPersonas(): any[] {
    return this.usuarios;
  }

  public ActualizarPersona(rut: string, nuevoUsuario: any) {
    const indice = this.usuarios.findIndex(elemento => elemento.rut === rut);
    if (indice === -1) {
      return false;
    }
    this.usuarios[indice] = nuevoUsuario;
    return true;
  }

  public EliminarPersona(rut: string): boolean {
    const indice = this.usuarios.findIndex(elemento => elemento.rut === rut);
    if (indice === -1) {
      return false;
    }
    this.usuarios.splice(indice, 1);
    return true;
  }

  public Validacion(email: string, password: string): boolean {
    console.log('Verificando:', email, password);
    const usuario = this.usuarios.find(user => user.correo === email && user.password === password);
    if (usuario) {
      this.usuarioAutenticado = usuario;
      return true;
    }
    return false;
  }

  public getPersonaValida() {
    return this.usuarioAutenticado;
  }

  public logUsuarios() {
    console.log(this.usuarios);
  }

  public validarpassword(contra: string, confirmar: string){
    const Contra2 = this.usuarios.find(Cont => Cont.password === contra && Cont.confirmpassword === confirmar);
  }

  public getTipo(tipo: string){
    return this.usuarios.find(elemento => elemento.tipo_user)
  }

}