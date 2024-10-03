import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string ="Artemis Home";
  miFormulario: FormGroup;
  mostrarInput: boolean = false;


  Personas: any[] = [];

  constructor(private usuarioService: UsuarioService,private fb: FormBuilder, private route: Router) {
    this.miFormulario = this.fb.group({
      opcion: [''],
      inputExtra: ['']
    });
  }

  onOpcionChange(opcion: string) {
    this.mostrarInput = opcion == 'Administrador';
  }

  exit(){
    this.route.navigate(['/login']);
  }

  async ngOnInit() {
    this.Personas = await this.usuarioService.getPersonas();
  }
}
