import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {userTest} from './usersTestHTTP';
import {HttpService} from './http.service'

@Component({
  selector: 'app-root',
  //templateUrl: './crm.component.html',
  template:  `<div clas="container">
                <span>Info about users</span>
                  <table>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th></th>
                    </tr>
                    <tr *ngFor="let user of users">
                      <td>{{user?.id}}</td>
                      <td>{{user?.name}}</td>
                      <td>{{user?.username}}</td>
                      <td>{{user?.email}}</td>
                      <td>{{user?.phone}}</td>
                      <td><button (click)="runTest()">Test</button></td>
                    </tr>
                  </table>
              </div>`,
  providers: [HttpService],
  styleUrls: ['./crm.component.less']
})
export class CrmComponent implements OnInit { 
   
  users: userTest[]=[];
     
    constructor(private httpService: HttpService){}
    
  ngOnInit(){
        
    this.httpService.getData().subscribe(data => this.users=data["userList"]);
  }
}
 

  // 

  //  runTest(){
  //   console.log(111111);
  // }
