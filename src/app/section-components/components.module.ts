import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { ComponentsRoutes } from './components.routes';

// Components
import { ComponentsDescriptionComponent } from './components-description/components.description.component';
import { ComponentsExampleComponent } from './components-example/components.example.component';
import { TeamDetailComponent } from './components-example/team-detail/team-detail.component';
import { TeamListComponent } from './components-example/team-list/team-list.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentsRoutes
    ],
    exports: [],
    declarations: [
        ComponentsDescriptionComponent,
        ComponentsExampleComponent,
        TeamDetailComponent,
        TeamListComponent
    ],
    providers: [],
})
export class ComponentsModule { }
