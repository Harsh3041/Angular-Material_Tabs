import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Input() newstreet:any;
  @Input() newlandmark:any;
  @Input() newvillage:any;
  @Input() newmandal:any;
  @Input() newcountry:any;
  @Input() newstate:any;
  @Input() newdistrict:any;
  @Input() newpin:any;


  constructor() { }


  check = false;
}
