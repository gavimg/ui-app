import { Component, Input, OnInit, inject } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-address-group',
  standalone: true,
  templateUrl: './address-group.component.html',
  styleUrl: './address-group.component.scss',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ]
})
export class AddressGroupComponent implements OnInit {
  @Input({ required: true}) controlKey = '';
  @Input() label = 'Address'
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.controlKey, new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      cellNo: new FormControl(''),
      pinCode: new FormControl('')
    }));
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
