import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-for-trial',
  templateUrl: './signup-for-trial.component.html',
  styleUrls: ['./signup-for-trial.component.css']
})
export class SignupForTrialComponent implements OnInit {

   subscriberEmail: string;

  constructor() { }

  ngOnInit() {
  }

  

  submitted = false;

  onSubmit() { this.submitted = true; }

}
