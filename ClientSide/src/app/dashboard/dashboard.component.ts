import { Component, OnInit } from '@angular/core';

import { AuthserviceService } from '../services/authservice.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatDialog } from '@angular/material'
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboardForm: FormGroup;
  constructor(
    private location: Location,
    private authService: AuthserviceService,
    private router: Router) { }

  ngOnInit() {
    this.getAllBlogs()

  }

  
  logout() {
    localStorage.removeItem('access_token');
  }

  username
  blogPosts
  getAllBlogs(){
    if(localStorage.length>0){
      let item = JSON.parse(localStorage.getItem("user"))
      this.username=item.FirstName      
    }
    this.authService.getAllBlogs().subscribe(data=>{
      this.blogPosts=data.blogs

    })
  }
}
