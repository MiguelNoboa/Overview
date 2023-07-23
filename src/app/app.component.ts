import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'angular-fe-overview';
  // name: string | undefined;
  // email: string | undefined;
  // phoneNumber: number | undefined;

  // sendValues() {
  //   console.log(this.name, this.email, this.phoneNumber)
  // }

  name: FormControl = new FormControl('')
};
