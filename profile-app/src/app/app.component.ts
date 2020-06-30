import { Component } from '@angular/core';
import { Person } from './personal-details/person.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Profile';

  person1 : Person = {
    firstName : "Keyur",
    lastName : "Thakor",
    age : 34,
    mobileNo : "7387029671",
    email : "keyurjava27@gmail.com"
  };
  
  person2 : Person = {
    firstName : "Hitesh",
    lastName : "Swami",
    age : 35,
    mobileNo : "7387029111",
    email : "Hiteshjava27@gmail.com"
  };
  
}
