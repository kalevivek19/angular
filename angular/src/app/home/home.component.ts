import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
      this.homeService.getAllCompanies().subscribe((data: any) => {
      this.companies = data.data;
    })
  }

}
