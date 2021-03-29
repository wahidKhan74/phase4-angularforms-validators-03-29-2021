import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public person = { firstName: '', lastName: '', email: '', city: '' };
  constructor() { }
  public submitted : boolean = false;
  ngOnInit(): void {
  }

  public submitInfo() {
    console.log(this.person);
  }
  
  public hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({onlySelf: true});
    });
  }

  submitForm(form:any){
    if(form.valid){
      this.submitted= true;
    } else {
      this.validateForm(form);
    }
  }
}
