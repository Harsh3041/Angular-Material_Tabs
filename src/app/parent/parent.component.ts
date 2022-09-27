import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  check=false;


  @Output() street:any;
  @Output() newstreet:any;

  @Output() landmark:any;
  @Output() newlandmark:any;

  @Output() village:any;
  @Output() newvillage:any;

  @Output() mandal:any;
  @Output() newmandal:any;

  @Output() country:any;
  @Output() newcountry:any;

  @Output() state:any;
  @Output() newstate:any;

  @Output() district:any;
  @Output() newdistrict:any;

  @Output() pin:any;
  @Output() newpin:any;

  update(event:any){
    if(event.target.checked)
    {
    this.newstreet = this.street;
    this.newlandmark = this.landmark;
    this.newvillage = this.village;
    this.newmandal =this.mandal;
    this.newcountry = this.country;
    this.newstate = this.state;
    this.newdistrict = this.district;
    this.newpin = this.pin;
    }
    else{
      this.newstreet = '';
      this.newlandmark = '';
      this.newvillage = '';
      this.newmandal = '';
      this.newcountry = '';
      this.state = '';
      this.district = '';
      this.pin = '';
    }
  }

}
