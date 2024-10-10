import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  constructor(private storage: Storage){
    this.init();
  }

  async init(){
    await this.storage.create();
    let admin = {
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
    await this.crearPersona(admin);

  }

  private tipo: string = "";
  
  private usuarioAutenticado: any = null;

  async capturarTipo(){
    
  }

  public async crearPersona(usuario: any): Promise<boolean> {
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    if (usuarios.find(user => user.rut == usuario.rut) != undefined) {
      return false;
    }
    usuarios.push(usuario);
    await this.storage.set("Usuarios", usuarios);
    return true;
  }

  public async getTipo(rut: string): Promise<any[]>{
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    let new_user = usuarios.find(usi => usi.rut === rut);
    return new_user.tipo_user;  
  }

  public async getPersona(rut: string): Promise<any[]> {
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    return usuarios.find(usi => usi.rut === rut);
  }

  public async getPersonas(): Promise<any[]> {
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    return usuarios;
  }

  public async ActualizarPersona(rut: string, nuevoUsuario: any) {
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    let indice = usuarios.findIndex(elemento => elemento.rut === rut);
    
    if (indice === -1) {
      return false;
    }
    usuarios[indice] = nuevoUsuario;
    await this.storage.set("Usuarios", usuarios);
    return true;
  }
  
  public async EliminarPersona(rut: string): Promise<boolean>{
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    let indice = usuarios.findIndex(elemento => elemento.rut === rut);
    if (indice === -1) {
      return false;
    }
    usuarios.splice(indice, 1);
    await this.storage.set("Usuarios", usuarios);
    return true;
  }

  public async Validacion(correo: string, password: string): Promise<boolean> {
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    const usuario = usuarios.find(user => user.correo === correo && user.password === password);
    if (usuario) {
      this.usuarioAutenticado = usuario;
      localStorage.setItem("Usuario", JSON.stringify(this.usuarioAutenticado));
      return true;
    }
    return false;
  }
  public getPersonaValida() {
    return this.usuarioAutenticado;
  }

  public async logUsuarios() {
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    console.log(usuarios);
  }

  public async validarpassword(contra: string, confirmar: string){
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    const Contra2 = usuarios.find(Cont => Cont.password === contra && Cont.confirmpassword === confirmar);
    return Contra2;
  }

  public async recuperar(correo:string){
    let usuarios: any[] = await this.storage.get("Usuarios") || [];
    return usuarios.find(elemento=> elemento.correo == correo);
  }

}