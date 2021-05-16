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
import { TopNewsCommunitiesComponent } from './top-news-communities/top-news-communities.component'
import { PopularThemesComponent } from './popular-themes/popular-themes.component';
import { TrendingCommunities } from './trending-communities/trending-communities.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';


import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SignModalComponent } from './sign-modal/sign-modal.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { UserCardComponent } from './user-card/user-card.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PopularPostsComponent,
    TopBarComponent,
    TrendingCardComponent,
    TopNewsCommunitiesComponent,
    PopularThemesComponent,
    TrendingCommunities,
    InfoCardComponent,
    PostCardComponent,
    SignModalComponent,
    FormCreateComponent,
    UserCardComponent

  ],
    imports: [
        CommonModule,
        NzButtonModule,
        NzInputModule,
        NzDropDownModule,
        NzIconModule,
        NzCardModule,
        NzGridModule,
        NzCollapseModule,
        NzTabsModule,
        NzUploadModule,
        ReactiveFormsModule
    ],
  exports: [
    PopularPostsComponent,
    TopBarComponent,
    TrendingCardComponent,
    TopNewsCommunitiesComponent,
    PopularThemesComponent,
    TrendingCommunities,
    InfoCardComponent,
    PostCardComponent,
    SignModalComponent,
    FormCreateComponent,
    UserCardComponent

  ]
})

export class ComponentsModule { }
