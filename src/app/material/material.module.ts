import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule
   ]
})
export class MaterialModule { }
