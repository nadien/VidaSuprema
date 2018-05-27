import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { SharedModule } from '@app/shared';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    GeneralRoutingModule
  ],
  declarations: [GeneralComponent, HomeComponent, SingleArticleComponent]
})
export class GeneralModule { }
