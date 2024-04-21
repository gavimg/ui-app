import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddressGroupComponent } from "../address-group/address-group.component";


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, AddressGroupComponent]
})
export class RegisterFormComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  saveDetails() {
    console.log(this.form.value);
    // some logic to read value and save
  }
}
