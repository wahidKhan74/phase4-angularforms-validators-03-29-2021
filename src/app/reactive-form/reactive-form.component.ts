import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // inject form builder dependency
  constructor(private formBuilder: FormBuilder) { }

  // define form group
  exampleForm : FormGroup;
  public submitted:boolean = false;

  ngOnInit(): void {
    this.exampleForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      lastName:['',[Validators.required,Validators.maxLength(16),Validators.minLength(2)]],
      email :['',[Validators.required, Validators.email]],
      city:['',Validators.required]
    });
  }

  public hasError(field:any) {
    return (this.exampleForm.get(field).invalid && this.exampleForm.get(field).touched && this.exampleForm.get(field).errors);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      } else {
        this.validateForm(control);
      }      
    });
  }

  submitForm(form:any){
    if(form.valid){
      this.submitted= true;
    } else {
      this.validateForm(form);
    }
  }

  get firstName() { return this.exampleForm.get('firstName')};
  get lastName() { return this.exampleForm.get('lastName')};
  get email() { return this.exampleForm.get('email')};
  get city() { return this.exampleForm.get('city')};

}
