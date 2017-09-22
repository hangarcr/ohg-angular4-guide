import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { ObservablesRoutes } from './observables.routes';

// Services
import { TeamService } from './observables-example/teams.service';

// Components
import { ObservablesDescriptionComponent } from './observables-description/observables.description.component';
import { ObservablesExampleComponent } from './observables-example/observables.example.component';
import { TeamAdminComponent } from './observables-example/team-admin/team-admin.component';
import { TeamDetailComponent } from './observables-example/team-detail/team-detail.component';
import { TeamListComponent } from './observables-example/team-list/team-list.component';

// Directives
import { PanelColoringDirective } from './observables-example/panel-coloring.directive';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ObservablesRoutes
    ],
    exports: [],
    declarations: [
        // Components
        ObservablesDescriptionComponent,
        ObservablesExampleComponent,
        TeamAdminComponent,
        TeamDetailComponent,
        TeamListComponent,

        // Directives
        PanelColoringDirective
    ],
    providers: [
        // Services
        TeamService
    ],
})
export class ObservablesModule { }
