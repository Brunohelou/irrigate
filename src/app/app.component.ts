import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'irrigate';
  breakpoint:any;

  ngOnInit() {
    console.log(window.innerWidth);
    this.breakpoint = window.innerWidth/1000;
    console.log(this.breakpoint);
}

onResize(event:any) {
  this.breakpoint = window.innerWidth/900;
}
printed(name:string, phone: string, email: string, help: string) {

  console.log(name,phone,email,help);
  
  window.alert('Obrigado! Entraremos em contato assim que possível');
}
}
