import { Service2 } from './../../service2.service';
import { Service1 } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  //providers:[Service1],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  num: number = 0;
  text: string = "";
  constructor(
    private myService1: Service1,
    private myService2: Service2) {
    
   }

  ngOnInit() {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }
}
