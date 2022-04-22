import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import * as AllIcons from '@ant-design/icons-angular/icons';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { NewsModule } from './pages/news/news.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ProfileModule } from './pages/profile/profile.module';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { NgxfModule } from '@ngxf/platform';
import { AuthInterceptor } from './global/auth.interceptor';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

// const icons: IconDefinition[] = [ DownloadOutline ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    NzIconModule,
    ComponentsModule,
    AppRoutingModule,
    NewsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzCollapseModule,
    ProfileModule,
    HttpClientModule,
    NgxfModule,
    NzAvatarModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
