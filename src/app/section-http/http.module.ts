import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { HttpRoutes } from './http.routes';

// Services
import { TeamService } from './http-example/teams.service';

// Pipes
import { CalculateAgePipe } from './http-example/calculate-age.pipe';
import { SearchFilterPipe } from './http-example/search-filter.pipe';

// Components
import { HttpExampleComponent } from './http-example/http.example.component';
import { HttpDescriptionComponent } from './http-description/http.description.component';
import { TeamAdminComponent } from './http-example/team-admin/team-admin.component';
import { TeamDetailComponent } from './http-example/team-detail/team-detail.component';
import { TeamListComponent } from './http-example/team-list/team-list.component';
import { TeamTemplateFormComponent } from './http-example/team-template-form/team-template-form.component';
import { TeamReactiveFormComponent } from './http-example/team-reactive-form/team-reactive-form.component';

// Directives
import { PanelColoringDirective } from './http-example/panel-coloring.directive';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        HttpModule,
        HttpRoutes
    ],
    exports: [],
    declarations: [
        // Components
        HttpExampleComponent,
        HttpDescriptionComponent,
        TeamAdminComponent,
        TeamDetailComponent,
        TeamListComponent,
        TeamTemplateFormComponent,
        TeamReactiveFormComponent,

        // Directive
        PanelColoringDirective,

        // Pipes
        CalculateAgePipe,
        SearchFilterPipe
    ],
    providers: [
        TeamService
    ]
})
export class HttpsModule { }
