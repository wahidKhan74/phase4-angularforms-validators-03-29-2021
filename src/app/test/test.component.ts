import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public isError:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeErrorStatus(){
    this.isError = ! this.isError;
  }
}
