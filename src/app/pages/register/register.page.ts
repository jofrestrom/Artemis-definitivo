import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
  correo: string = '';
  mensaje: string = '';
  mensajecorreo: string = '';

  miFormulario: FormGroup;
  mostrarInput: boolean = false;
  constructor(private router: Router, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      opcion: [''],
      inputExtra: ['']
    });
  }

  onOpcionChange(opcion: string) {
    this.mostrarInput = opcion === 'SI';
  }
    
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[kK]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,20}")]),
    correo: new FormControl('',[Validators.minLength(5), Validators.maxLength(40), Validators.required]),
    password: new FormControl('',[Validators.minLength(4), Validators.required]),
    confirmpassword: new FormControl('',[Validators.minLength(4), Validators.required]),
    fecha: new FormControl(Validators.required),
    genero: new FormControl(Validators.required),
    tipo_user: new FormControl(Validators.required),
    tiene_Auto: new FormControl(Validators.required),
    marca: new FormControl(),
    patente: new FormControl(),
  });

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmpassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { passwordsDoNotMatch: true } : null;
  }

  ngOnInit() {
  }

  validad_edad(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const fecha = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - fecha.getFullYear();
      const monthDiff = today.getMonth() - fecha.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < fecha.getDate())) {
        age--;
      }

      return (age >= minAge && age <= maxAge) ? null : { 'invalidAge': true };
    };
  }

  public registrar():void{
    if(this.persona.value){
      console.log(this.persona.value);
      alert("Registrado con exito");
      this.router.navigate(['/login']);  
      alert('el correo es incorrecto');
      this.mensajecorreo = 'el correo es invalido'
    }
  }

}
