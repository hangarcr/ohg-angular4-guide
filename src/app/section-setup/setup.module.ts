import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { SetupRoutes } from './setup.routes';

// Components
import { SetupDescriptionComponent } from './setup-description/setup.description.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SetupRoutes
    ],
    exports: [],
    declarations: [
        SetupDescriptionComponent
    ],
    providers: [],
})
export class SetupModule { }
