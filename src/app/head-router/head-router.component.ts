import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-router',
  templateUrl: './head-router.component.html',
  styleUrls: ['./head-router.component.scss']
})
export class HeadRouterComponent implements OnInit {
  params: any;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams()
  }
  
  getParams() {
    const headerRouter = document.getElementById('header-router');
     if(this.router.url === '/') {
      headerRouter.classList.add('bg-black');
     } else {
      headerRouter.classList.remove('bg-black');
     }
  }
}
