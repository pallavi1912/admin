import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UsersserviceService} from '../usersservice.service';
import { from } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface DialogData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
 
  users:any;
  
 
  constructor(public dialog: MatDialog, private usersserviceService: UsersserviceService, private http: Http) { }

  // openDialog(userId, userName, title) {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);
  //   dialogRef.componentInstance.id = userId;
  //   dialogRef.componentInstance.name = userName;
  //   dialogRef.componentInstance.title = title;

 

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     console.log('users', this.users);
  //     let pos = this.users.map(function(e) { return e.id; }).indexOf(result);
  //     this.users.splice(pos,1);

  //   });
  // }

  // deleteUser(userId,userName){
  //   console.log(userId);
  //   let res = this.openDialog(userId,userName, 'User');
  // }

  getUsers(){
    this.usersserviceService.usersList().subscribe(
      data=>{
        console.log("data in component", data);
        this.users = data;
      }
    )
  }

  ngOnInit(): void {

    this.getUsers();

    // this.usersserviceService.usersList();

    // this.http.get("http://jsonplaceholder.typicode.com/users").map((response) => response.json()).subscribe((data) => console.log(data))
  }

}
// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: './common/dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {
//   id: string;
//   name: string;
//   title: string;

//   constructor(
//     public dialogRef: MatDialogRef<DialogContentExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//     clickedNo(): void {
//       console.log("clicked on No");
//       this.dialogRef.close(false);
      
//     }

//     clickedYes(): void {
//       console.log("clicked on Yes");
//       this.dialogRef.close(this.id);
//     }

// }
