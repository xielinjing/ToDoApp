import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';



const routes: Routes = [{
  path:'todos',
  component:TodoComponent,
},
{
  path:'todos/:todoid',
  component:TodoDetailsComponent,
},
{
  path:'new',
  component:NewTodoComponent,
},
{
  path:'',
  redirectTo:'todos',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
