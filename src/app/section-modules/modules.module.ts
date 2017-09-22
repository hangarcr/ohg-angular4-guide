import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { ModulesRoutes } from './modules.routes';

// Components
import { ModulesDescriptionComponent } from './modules-description/modules.description.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ModulesRoutes
    ],
    exports: [],
    declarations: [
        ModulesDescriptionComponent
    ],
    providers: [],
})
export class ModulesModule { }
