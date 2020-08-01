import { Module1Module } from './../module1/module1.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: Module1Module
})
export class Service1 {
  public num: number;
  constructor() {
    this.num = Math.round(Math.random() * 1000);
   }
 
}
