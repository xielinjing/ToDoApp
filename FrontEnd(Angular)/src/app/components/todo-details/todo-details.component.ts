import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import { HttpClient,HttpHeaders } from '@angular/common/http';  //import HTML service

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  
  public key:any;
  public todolist:any[] = [];
  public item:any;

  constructor(public route:ActivatedRoute,public http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((response)=>{
      console.log(response)
      this.key = parseInt(response.todoid);
      let api='http://localhost:3000/todos';

      this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.todolist=response;   //输入result报错时，指定一下response的类型
      console.log(this.todolist);
      this.item = this.todolist[this.key];
      console.log(this.item);
    });
    });

    
  }

  update(){
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    let id=this.item._id;
    var api='http://localhost:3000/todos/'+id;
    this.http.put(api,{
      "title": this.item.title,
      "description": this.item.description,
      "isFinished": this.item.isFinished,
      "DueDate":this.item.DueDate,
      "DueTime":this.item.DueTime
  }, httpOptions).subscribe((response)=>{
    console.log(response);
    alert("Updated Successfully!")
  })
  }

  back(){
    this.router.navigate(['/todos']);
  }

}
