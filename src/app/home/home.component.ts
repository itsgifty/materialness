import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email: string | undefined;
  title: string | undefined;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      // data: {
      //   email: this.email,
      //   title: 'Forgot username?'
      // },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')

      this.email = result
      console.warn(this.email)
    });
  }
}
