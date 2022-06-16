import { Component, OnInit } from '@angular/core';
import { Customers } from "../customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

customers: Customers[] = [
    { id: 1, name: ' Jennifer Johnson' },
    { id: 2, name: ' John Ferguson' },
    { id: 3, name: 'Patterson' },
    { id: 4, name: 'Jasmine James' },
    { id: 5, name: ' Michael Hensley' },
    { id: 6, name: ' Elijah Fisher' },
    { id: 7, name: ' Samuel Patterson' },
    { id: 8, name: 'Justin Wright' },
    { id: 9, name: 'Ronaldo' },
    { id: 10,  name: 'Tornado' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
