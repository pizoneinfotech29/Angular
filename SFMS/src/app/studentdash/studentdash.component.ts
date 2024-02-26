import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrl: './studentdash.component.css'
})
export class StudentdashComponent  implements OnInit{
  formValue !: FormGroup

  constructor(private FormBuilder : FormBuilder) {}

  ngOnInit(): void {
   this.formValue = this.FormBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    mobileNo: [''],
    fees: [''],
   })
  }

}
