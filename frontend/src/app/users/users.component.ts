import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

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
 
  
  users = [
    {'id':'US3412','name': 'Sheldon Cooper', 'email':'sheldon.cooper@gmail.com', 'contact': '8085760901'},
    {'id':'US3678','name': 'Penny Hofstadter', 'email':'penny.hofstadter@gmail.com', 'contact': '8085760902'},
    {'id':'US9867','name': 'Leonard Hofstadter', 'email':'leonard.hofstadter@gmail.com', 'contact': '8085760903'},
    {'id':'US5677','name': 'Howard Wolowitz', 'email':'howard.wolowitz@gmail.com', 'contact': '8085760904'},
    {'id':'US7989','name': 'Rajesh Koothrappali', 'email':'raj.koothrappali@gmail.com', 'contact': '8085760905'},
    {'id':'US3987','name': 'Bernadette Rostenkowski-Wolowitz', 'email':'bernadette.rostenkowski.wolowitz@gmail.com', 'contact': '8085760906'},
    {'id':'US5345','name': 'Amy Farrah Fowler', 'email':'amy.farrah.fowler@gmail.com', 'contact': '8085760907'}
  ]
  constructor(public dialog: MatDialog) { }

  openDialog(userId, userName, title) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.componentInstance.id = userId;
    dialogRef.componentInstance.name = userName;
    dialogRef.componentInstance.title = title;

 

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log('users', this.users);
      let pos = this.users.map(function(e) { return e.id; }).indexOf(result);
      this.users.splice(pos,pos);

    });
  }

  deleteUser(userId,userName){
    console.log(userId);
    let res = this.openDialog(userId,userName, 'User');
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './common/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  id: string;
  name: string;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    clickedNo(): void {
      console.log("clicked on No");
      this.dialogRef.close(false);
      
    }

    clickedYes(): void {
      console.log("clicked on Yes");
      this.dialogRef.close(this.id);
    }

}
