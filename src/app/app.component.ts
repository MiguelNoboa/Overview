import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: FormControl = new FormControl('', Validators.required,);
  email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  phoneNumber: FormControl = new FormControl ('');

  form: FormGroup;

  constructor(
    private formbuilder: FormBuilder
  ){
    this.form= this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]] //para corrobar que sea # telefonico
    });
  }



  sendValues(){
    console.log(this.name.value);
    this.form.reset();//restablece valores iniciales en el formulario
  }

};
