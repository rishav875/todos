import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    {id:1, description: 'Learn to code'},
    {id:2, description: 'DataStructure'},
    {id:3, description: 'Springboot'},
    {id:4, description: 'JAVA'},
    {id:5, description: 'Expert in Angular'},
  ]
  // todos={
  //   id :1,
  //   description: 'Learn to code'
  // }

  constructor() { }

  ngOnInit() {
  }

}
