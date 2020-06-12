import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];
  birthDay: any;
  address: any;


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
      this.homeService.getUsers().subscribe((data: any) => {
        this.users = data;
      });
F  }

  deleteUser(strUserId) {
    this.homeService.deleteUser(strUserId).subscribe((data: any) => {
      if (data.success) {
        this.getAllUsers();
      }
    });
  }

}
