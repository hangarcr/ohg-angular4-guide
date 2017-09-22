import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { ServicesRoutes } from './services.routes';

// Components
import { ServicesExampleComponent } from './services-example/services.example.component';
import { ServicesDescriptionComponent } from './services-description/services.description.component';
import { TeamDetailComponent } from './services-example/team-detail/team-detail.component';
import { TeamListComponent } from './services-example/team-list/team-list.component';
import { TeamAdminComponent } from './services-example/team-admin/team-admin.component';

// Directive
import { PanelColoringDirective } from './services-example/panel-coloring.directive';

// Services
import { TeamService } from './services-example/teams.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ServicesRoutes
    ],
    exports: [],
    declarations: [
        // Components
        ServicesExampleComponent,
        ServicesDescriptionComponent,
        TeamDetailComponent,
        TeamListComponent,
        TeamAdminComponent,

        // Directives
        PanelColoringDirective
    ],
    providers: [
        //Services
        TeamService
    ]
})
export class ServicesModule { }
