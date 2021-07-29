import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public detailsActive: boolean =  true;
  public log: string[] = [];

  clickBotton(){
    this.detailsActive = !this.detailsActive;
    this.log.push(new Date().toLocaleDateString());
  }

}
