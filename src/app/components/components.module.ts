import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NzInputModule } from 'ng-zorro-antd/input';  
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { TrendingCardComponent } from './trending-card/trending-card.component';

@NgModule({
    declarations: [
      PopularPostsComponent,
      TopBarComponent,
      TrendingCardComponent
      
    ],
    imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzDropDownModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    ],
    exports:[
      PopularPostsComponent,
      TopBarComponent,
      TrendingCardComponent      
    ]
  })

  export class ComponentsModule { }