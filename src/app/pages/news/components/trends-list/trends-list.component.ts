import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends-list.component.html',
  styleUrls: ['./trends-list.component.scss']
})
export class TrendsListComponent implements OnInit {
  @Input() trends;

  constructor() { }

  ngOnInit(): void {
  }

}
