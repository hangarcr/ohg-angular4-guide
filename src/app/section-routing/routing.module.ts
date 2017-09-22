import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { RoutingRoutes } from './routing.routes';

// Services
import { TeamService } from './routing-example/teams.service';
import { AdminService } from './routing-example/admin.service';


// Pipes
import { CalculateAgePipe } from './routing-example/calculate-age.pipe';
import { SearchFilterPipe } from './routing-example/search-filter.pipe';

// Components
import { RoutingExampleComponent } from './routing-example/routing.example.component';
import { RoutingDescriptionComponent } from './routing-description/routing.description.component';
import { TeamAdminComponent } from './routing-example/team-admin/team-admin.component';
import { TeamDetailComponent } from './routing-example/team-detail/team-detail.component';
import { TeamListComponent } from './routing-example/team-list/team-list.component';
import { TeamTemplateFormComponent } from './routing-example/team-template-form/team-template-form.component';
import { TeamReactiveFormComponent } from './routing-example/team-reactive-form/team-reactive-form.component';
import { TeamSectionComponent } from './routing-example/team-section/team-section.component';
import { TeamAdminSectionComponent } from './routing-example/team-admin-section/team-admin-section.component';

// Directives
import { PanelColoringDirective } from './routing-example/panel-coloring.directive';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        HttpModule,
        RoutingRoutes
    ],
    exports: [],
    declarations: [
        // Components
        RoutingExampleComponent,
        RoutingDescriptionComponent,
        TeamAdminComponent,
        TeamDetailComponent,
        TeamListComponent,
        TeamTemplateFormComponent,
        TeamReactiveFormComponent,
        TeamAdminSectionComponent,
        TeamSectionComponent,

        // Directive
        PanelColoringDirective,

        // Pipes
        CalculateAgePipe,
        SearchFilterPipe
    ],
    providers: [
        TeamService,
        AdminService
    ]
})
export class RoutingModule { }
