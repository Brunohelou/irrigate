import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'irrigate';
  breakpoint:any;
  breakpoint1:any;   
  listHeight:any

  ngOnInit() {
    console.log(window.innerWidth);
    this.breakpoint = window.innerWidth/1000;
    this.breakpoint1 = window.innerWidth/600;

    if(window.innerWidth <= 600){
    this.listHeight = 300;
  }else{
    this.listHeight = 500;
  }
    console.log(window.innerWidth);
}

onResize(event:any) {
  this.breakpoint = window.innerWidth/900;
  this.breakpoint1 = window.innerWidth/600;
  if(window.innerWidth <= 600){
    this.listHeight = 300;
  }else{
    this.listHeight = 500;
  }
}
printed(name:string, phone: string, email: string, help: string) {

  console.log(name,phone,email,help);
  
  window.alert('Obrigado! Entraremos em contato assim que possível');
}
}
