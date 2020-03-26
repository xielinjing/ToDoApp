import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';  //import HTML service
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  public isFinished:boolean;
  public title:string;
  public description:string;
  public DueDate:string;
  public DueTime:string;

  constructor(public http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

  add(){
    //手动设置请求的类型
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    //存在跨域   需要在nodejs后台允许跨域
    var api='http://localhost:3000/todos';
    this.http.post(api,{
      "isFinished": false,
      "title": this.title,
      "description": this.description,
      "DueDate": this.DueDate,
      "DueTime": this.DueTime
  }, httpOptions).subscribe((response)=>{
    console.log(response);
    alert('Added Successfully!')
  })
  }

  back(){
    this.router.navigate(['/todos']);
  }

}
