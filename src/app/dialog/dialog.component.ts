import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: HomeComponent
  ) {

  }
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {
    this.dialogRef.close(this.emailFormControl.value);
  }
}
