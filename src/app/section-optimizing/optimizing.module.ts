import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { OptimizingRoutes } from './optimizing.routes';

// Components
import { OptimizingDescriptionComponent } from './optimizing-description/optimizing.description.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        OptimizingRoutes
    ],
    exports: [],
    declarations: [
        OptimizingDescriptionComponent
    ],
    providers: [],
})
export class OptimizingModule { }
