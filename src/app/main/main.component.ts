import { ElementRef, HostListener, Component, OnInit } from '@angular/core';

@Component ( {
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    dblclick=false;
    aaa='all'//显示什么
    title = 'todos';//标题
    todoes: any[] = [];
    todosLength: number=0;//有多少条status === 'active'
    // 构造方法
    constructor() { }
    //初始化方法
    ngOnInit () { 
      this.todosLength = this.todoes.length;
    }
    //改变复选框状态触发事件
    changeStatus (item): void {
      if (item.status=='completed') {
        item['status'] = 'active';
        item.checked=false;
      } else {
        item['status'] = 'completed';
        item.checked=true;
      }
      let length = 0;
      for (let i = 0; i< this.todoes.length; i++) {
        if (this.todoes[i].status === 'active') {
          length++;
        }
      }
      this.todosLength = length;
    }
    // 往数据库里添加新的todo
    save(todo:string): void {
      todo = todo.trim();
      if (!todo) { return; }
      // this.todoes.push(todo);
      let a = {};
      a['todo'] = todo;
      a['status'] = 'active';
      a['checked']=false;
      a['shaungJi']=false;
      this.todoes.push(a);
      this.todosLength = this.todosLength+1;
    }
    //删除status==='completed'的todo
    reset() { 
      for(let i=0; i<this.todoes.length;i++){
        if(this.todoes[i].status==='completed'){
          this.todoes.splice(i,1);
          i=-1;
        }
      }
     }
    //删除单个todo
    delTodo(i):void {
      this.todoes.splice(i,1);
      let length = 0;
      for (let i = 0; i< this.todoes.length; i++) {
        if (this.todoes[i].status === 'active') {
          length++;
        }
      }
      this.todosLength = length;
    }
    // 全选和全部选
    all() :void{
      if(this.todosLength!=0){
        let length = 0;
        for (let i = 0; i< this.todoes.length; i++) {
            this.todoes[i].status="completed";
            this.todoes[i].checked=true;
        }
        this.todosLength = length;
      }else{
        let length = 0;
        for (let i = 0; i< this.todoes.length; i++) {
          this.todoes[i].status = 'active';
          this.todoes[i].checked=false;
            length++;
        }
        this.todosLength = length;
      }
    }
    // 选择全部
    All():void{
      this.aaa='all';
    }
    // 选择active的
    active():void{
      this.aaa='active';     
    }
    // 选择completed的
    completed():void{
      this.aaa='completed';
    }
    // 双击输入
    shuru(i):void{
      this.dblclick=true;
     this.todoes[i].shaungJi=true;
    }
    // 双击输出
    shuchu(i):void{
      this.dblclick=false;
      this.todoes[i].shaungJi=false;
    }
    // 鼠标移入事件
    // @HostListener('mouseenter') onMouseEnter() {
    //   this.isNone=false;
    // }
  //  鼠标移除事件
    // @HostListener('mouseleave') onMouseLeave() {
    //   this.isNone=true;
    // }

}
