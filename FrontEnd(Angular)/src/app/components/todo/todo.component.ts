import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HttpClient,HttpHeaders } from '@angular/common/http';  //import HTML service

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todolist:any[] = [];   //define an array to store todolist

  constructor(public http:HttpClient,private router:Router) { }

  ngOnInit() {
    let api='http://localhost:3000/todos';

    //底层封装http请求的时候用的是rxjs，所以获取异步请求的时候用subscribe订阅
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.todolist=response;   //输入result报错时，指定一下response的类型
    });

  }

  checkboxChange(key){
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    let id=this.todolist[key]._id;
    var api='http://localhost:3000/todos/'+id;
    this.http.put(api,{
      "title": this.todolist[key].title,
      "description": this.todolist[key].description,
      "isFinished": this.todolist[key].isFinished,
      "DueDate":this.todolist[key].DueDate,
      "DueTime":this.todolist[key].DueTime
  }, httpOptions).subscribe((response)=>{
    console.log(response);
  })
  }

  goDetail(key){
    this.router.navigate(['/todos',key]);
  }

  addNew(){
    this.router.navigate(['new']);
  }

  delete(key){
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    let id=this.todolist[key]._id;
    var api='http://localhost:3000/todos/'+id;
    this.http.delete(api).subscribe((response)=>{
    console.log(response);
    this.ngOnInit();
  })
  }

}
