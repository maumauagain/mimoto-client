import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatSelectModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
