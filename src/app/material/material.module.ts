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
  MatGridListModule,
  MatCardModule,
  MatExpansionModule
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
    MatGridListModule,
    MatCardModule,
    MatExpansionModule
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
    MatGridListModule,
    MatCardModule,
    MatExpansionModule
   ]
})
export class MaterialModule { }
