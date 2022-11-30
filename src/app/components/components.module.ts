import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationchartComponent } from './organization-chart/organization-chart.component';
import { OrganizationChartNodeComponent } from './organization-chart/organization-chart-node/organization-chart-node.component';
import { MatIconModule } from '@angular/material/icon';

const COMPONENTS = [
  OrganizationchartComponent,
  OrganizationChartNodeComponent
];

const ANGULAR_MATERIAL_MODULE = [
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...ANGULAR_MATERIAL_MODULE
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class ComponentsModule { }
