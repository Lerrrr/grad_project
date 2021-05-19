import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TrendsListComponent } from './components/trends-list/trends-list.component';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NgxfModule} from '@ngxf/platform';


@NgModule({

    declarations: [
        NewsComponent,
        TrendsListComponent

      ],
    imports: [
        CommonModule,
        NewsRoutingModule,
        ComponentsModule,
        NzCarouselModule,
        NgxfModule
    ]
})

  export class NewsModule { }
