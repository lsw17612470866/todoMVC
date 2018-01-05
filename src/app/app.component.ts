import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Todo } from 'app/todo';
import { Subject } from 'rxjs/Subject';
import { Output, Input } from '@angular/core/src/metadata/directives';
import { FormGroup } from '@angular/forms';
import { all } from 'q';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allChecked =false;
  
  title = 'ToDoMVC';
  todoes: any[]= [] ;
  isNone=true;
  isCanDelete :boolean;
  
  constructor(
    private el: ElementRef
  ) { 
    
    
   }
  ngOnInit () { }
  save(todo:string): void {
    todo = todo.trim();
    if (!todo) { return; }
    this.todoes.push({
      todo:todo,
      status: all
    });
  }
  reset() { this.todoes=[]; }
  delTodo(i):void {
    this.todoes.splice(i,1);
  }
  all() :void{
  if(this.allChecked===false){
    this.allChecked=true;
  }else{
    this.allChecked=false;
  }
    

   
       
    
    
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isNone=false;
  // }
 
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.isNone=true;
  // }

  
}
