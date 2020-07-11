import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  id : any;
  userDetails : any = {};
  edit : boolean = false;
  users = [
    {'id':'US3412','username':'shelly','fname':'Sheldon','lname': 'Cooper', 'email':'sheldon.cooper@gmail.com', 'contact': '8085760901', 'address': '260-C North El Camino Real','city':'Encinitas','country':'California','pincode':'92069'},
    {'id':'US3678','username':'penny','fname':'Penny','lname': 'Hofstadter', 'email':'penny.hofstadter@gmail.com', 'contact': '8085760902', 'address': '591 Grand Avenue','city':'San Marcos','country':'California','pincode':'95678'},
    {'id':'US9867','username':'leo','fname':'Leonard','lname': 'Hofstadter', 'email':'leonard.hofstadter@gmail.com', 'contact': '8085760903', 'address': '1186 Roseville Pkwy','city':'Roseville','country':'California','pincode':'92110'},
    {'id':'US5677','username':'howie','fname':'Howard','lname': 'Wolowitz', 'email':'howard.wolowitz@gmail.com', 'contact': '8085760904', 'address': '3650 Rosecrans Street','city':'San Diego','country':'California','pincode':'92122'},
    {'id':'US7989','username':'raj','fname':'Rajesh','lname': 'Koothrappali', 'email':'raj.koothrappali@gmail.com', 'contact': '8085760905', 'address': '4545 LaJolla Village Dr','city':'San Diego','country':'California','pincode':'95825'},
    {'id':'US3987','username':'bernie','fname':'Bernadette','lname': 'Rostenkowski-Wolowitz', 'email':'bernadette.rostenkowski.wolowitz@gmail.com', 'contact': '8085760906','address': '2435 Fair Oaks Blvd','city':'San Francisco','country':'California','pincode':'94103'},
    {'id':'US5345','username':'amy','fname':'Amy','lname': 'Farrah Fowler', 'email':'amy.farrah.fowler@gmail.com', 'contact': '8085760907', 'address': '3141 Crow Canyon Place','city':'San Ramon','country':'California','pincode':'94583'}
  ];
  constructor(private route: ActivatedRoute) {

    console.log('tuype',this.route.params['id']);
    this.route.params.subscribe(params => {
      console.log('params',params);
      this.id = params['id'];
      console.log('id------>',this.id);
      if(this.id != undefined ){
        this.edit = true;
        console.log('edit');
        let pos = this.users.map(function(e) { return e.id; }).indexOf(this.id);
        this.userDetails = this.users[pos];
        console.log('user details', this.userDetails); 
      }else{
        console.log('add');
      }
    });

    
    

   }

  ngOnInit(): void {
   
  }

}
