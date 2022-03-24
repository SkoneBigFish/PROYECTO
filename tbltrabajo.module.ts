import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbltrabajoPageRoutingModule } from './tbltrabajo-routing.module';

import { TbltrabajoPage } from './tbltrabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbltrabajoPageRoutingModule
  ],
  declarations: [TbltrabajoPage]
})
export class TbltrabajoPageModule {}
