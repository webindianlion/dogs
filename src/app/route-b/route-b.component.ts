import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css']
})
export class RouteBComponent implements OnInit {
 departments = [
   {"id":1, "name":"Angular"},
   {"id":2, "name":"Node"},
   {"id":3, "name":"Mongodb"},
   {"id":4, "name":"Bootstrap"},
   {"id":5, "name":"HTML"}
 ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(department:any) {
    this.router.navigate(["departments", department.id]);
  }

}
