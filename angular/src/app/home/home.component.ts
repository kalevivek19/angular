import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies = [];
  birthDay: any;
  address: any;
  

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getAllCompanies().subscribe((data: any) => {
      this.companies = data.data;
      this.birthDay = new Date(1988, 3, 15); // April 15, 1988
      this.address = 'pune';      
    })
  }

}
