import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  // .dropdown-menu{background-color: #343a40!important;}
  // .dropdown-item{color: rgba(255,255,255,.5);}
  // .dropdown-item:hover{background-color: #343a40!important; color: #fff;}
  .navbar-light{padding-top:0px;padding-bottom:0px}
  `]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
