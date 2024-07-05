import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit {
  cliName: String | undefined;
  constructor() { }

  ngOnInit() {

  }

  save(){

  }
  clear(){
    
  }

}
