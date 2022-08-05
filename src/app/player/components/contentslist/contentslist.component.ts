import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contentslist',
  templateUrl: './contentslist.component.html',
  styleUrls: ['./contentslist.component.scss'],
})
export class ContentslistComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() { }
  navigate() {
    this.router.navigate(['player/pdf']);
  }
}
