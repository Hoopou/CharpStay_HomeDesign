//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';
import { PropertyPreviewComponent } from './components/property-preview/property-preview.component';

@NgModule({
declarations: [HomeComponent, PropertyPreviewComponent ],
imports: [
CommonModule, 
FormsModule, 
ReactiveFormsModule, 
HomeRoutingModule 
],
})

export class HomeModule{ }

