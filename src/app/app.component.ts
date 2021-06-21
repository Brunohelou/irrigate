import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'irrigate';
  breakpoint: any;
  breakpoint1: any;
  listHeight: any;
  casesHeight: any;
  casesHeightout: any;
  disabled = false;
  gridTwo: any;
  phone: boolean = false;



  ngOnInit() {

    //carousel width




    console.log(window.innerWidth);
    this.breakpoint = (window.innerWidth <= 700) ? 1:2 ;
    this.breakpoint1 = window.innerWidth / 600;

    if (window.innerWidth <= 600) {
      this.listHeight = 300;
    } else {
      this.listHeight = 500;
    }
    //carousel
    if (window.innerWidth <= 650 && window.innerWidth >= 381) {
      this.phone = false;
      this.casesHeight = 800;
      this.casesHeightout = 800;
    } else if (window.innerWidth <= 380) {
      this.casesHeight = 700;
      this.casesHeightout = 1000;
    } else {
      this.phone = true;
      this.casesHeightout = 10000;
    }
    console.log(window.innerWidth);


    //grid 2
    this.gridTwo = (600 + (50000 / window.innerWidth));

  }

  onResize(event: any) {
    this.breakpoint = window.innerWidth / 900;
    this.breakpoint1 = window.innerWidth / 600;

    //resize  benefícios
    if (window.innerWidth <= 600) {
      this.listHeight = 300;
    } else {
      this.listHeight = 500;
    }

    //resize cases & Clientes
    if (window.innerWidth <= 650) {
      this.casesHeight = 800;
      this.casesHeightout = 800;
    } else {
      this.casesHeight = 700;
      this.casesHeightout = 800;
    }
  }
  printed(name: string, phone: string, email: string, help: string) {

    console.log(name, phone, email, help);

    window.alert('Obrigado! Entraremos em contato assim que possível');
  }
}
