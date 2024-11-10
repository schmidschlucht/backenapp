import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'ots-create-user',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
 fb: FormBuilder = new FormBuilder();
  userForm:FormGroup = this.fb.group({
    user_lastname: ['', Validators.required],
    user_firstname: ['', Validators.required],
    user_email: ['', Validators.required],
  });

  onSubmit() {
    const formData = this.userForm.value;
    console.log(formData);
    alert("Gespeichert");
  }
}
