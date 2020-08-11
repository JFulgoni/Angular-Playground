import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // validation of username and password would occur here
    if (this.allValuesPresent()) {
      this.router.navigateByUrl('/actions');
    }
  }

  allValuesPresent() {
    return this.validateString(this.username) && this.validateString(this.password);
  }

  validateString(string: String) {
    return string && (string.trim().length != 0);
  }

}
