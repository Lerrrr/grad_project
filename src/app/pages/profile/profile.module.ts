import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
    
    declarations: [
        ProfileComponent
        
      ],
    imports: [
    CommonModule,
    ComponentsModule,
    ProfileRoutingModule
    ]
  })

  export class ProfileModule { }