import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.scss']
})
export class TrendingCardComponent implements OnInit {
 
  @Input() bgImage
  @Input() title
  @Input() description
  @Input() source:{
    avatar: string;
    name: string;
  }
  

  


  constructor() { }

  ngOnInit(): void {
  }

}
