import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})

export class GreetComponent implements OnInit {

  dato = 'nombre';
  constructor() {}

  ngOnInit() {
    console.log('componente inicializado...');
  }
}
