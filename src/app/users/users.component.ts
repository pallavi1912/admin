import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {'id':'US3412','name': 'Sheldon Cooper', 'email':'sheldon.cooper@gmail.com', 'contact': '8085760901'},
    {'id':'US3678','name': 'Penny Hofstadter', 'email':'penny.hofstadter@gmail.com', 'contact': '8085760902'},
    {'id':'US9867','name': 'Leonard Hofstadter', 'email':'leonard.hofstadter@gmail.com', 'contact': '8085760903'},
    {'id':'US5677','name': 'Howard Wolowitz', 'email':'howard.wolowitz@gmail.com', 'contact': '8085760904'},
    {'id':'US7989','name': 'Rajesh Koothrappali', 'email':'raj.koothrappali@gmail.com', 'contact': '8085760905'},
    {'id':'US3987','name': 'Bernadette Rostenkowski-Wolowitz', 'email':'bernadette.rostenkowski.wolowitz@gmail.com', 'contact': '8085760906'},
    {'id':'US5345','name': 'Amy Farrah Fowler', 'email':'amy.farrah.fowler@gmail.com', 'contact': '8085760907'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
