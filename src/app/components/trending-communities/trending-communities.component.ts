import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-trending-communities',
  templateUrl: './trending-communities.component.html',
  styleUrls: ['./trending-communities.component.scss']
})

export class TrendingCommunities implements OnInit {
  @Input() communitiesAvatar;
 
  constructor() { }

  ngOnInit(): void {
  }

}