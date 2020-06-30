import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.mode';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input()
  person : Person = new Person();

  @Input()
  bgColor : string = 'info';

  constructor() { 
    console.log("Personal Details Component Object Created..!");
  }

  ngOnInit() {
    console.log("Personal Details Component Object Initialized..!");
    // this.person.firstName = 'keyur';
    // this.person.lastName = 'thakor';
    // this.person.age = 27;
    // this.person.email = 'keyurjava27@gmail.com';
    // this.person.mobileNo = '7387029671';
  }

}
