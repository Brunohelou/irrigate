import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'irrigate';
  

  

printed(name:string, phone: string, email: string, help: string) {

  console.log(name,phone,email,help);
  
  window.alert('Obrigado! Entraremos em contato assim que possível');
}
}
