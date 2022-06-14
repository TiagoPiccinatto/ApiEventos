import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  ngIf="isCollapsed";
  isCollapsed = true;
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }


  showmenu(): boolean {
    return this.router.url !== '/user/login'; // se a url for diferente de /user/login, retorna true para exibir o menu
  }

}
