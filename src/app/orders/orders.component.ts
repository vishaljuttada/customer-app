import { Component, OnInit } from '@angular/core';
import {Customers } from "../customer";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  customers: Customers[] = [
    { id: 1, name: ' Jennifer Johnson',  order: 'iPhone 8',           price: 50000 },
    { id: 2, name: ' John Ferguson',     order: 'iPhone 9',           price: 60000 },
    { id: 3, name: 'Patterson',          order: 'iPhone 10',          price: 70000 },
    { id: 4, name: 'Jasmine James',      order: 'iPhone 11' ,         price: 100000 },
    { id: 5, name: ' Michael Hensley',   order: 'Samsung Galaxy S9',  price: 25000 },
    { id: 6, name: ' Elijah Fisher',     order: 'Samsung Galaxy S8' , price: 10000 },
    { id: 7, name: ' Samuel Patterson',  order: 'Samsung Galaxy S11', price: 500000 },
    { id: 8, name: 'Justin Wright',      order: 'Nokia Galaxy S8' ,   price: 10000 },
    { id: 9, name: 'Ronaldo',            order: 'Nokia Galaxy S7' ,   price: 8000 },
    { id: 10,  name: 'Tornado',          order: 'Nokia Galaxy' ,      price: 5000 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
