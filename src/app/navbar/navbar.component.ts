import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;       
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.setAttribute('defer', '');
    document.body.appendChild(script);
  
  script.onload = () => {
    // "https://static.elfsight.com/platform/platform.js" 
    "https://static.elfsight.com/platform/platform.js" 

  };
  }
}
