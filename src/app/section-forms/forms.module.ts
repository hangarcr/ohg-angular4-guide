import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { FormsRoutes } from './forms.routes';

// Services
import { TeamService } from './forms-example/teams.service';

// Pipes
import { CalculateAgePipe } from './forms-example/calculate-age.pipe';
import { SearchFilterPipe } from './forms-example/search-filter.pipe';

// Components
import { FormsDescriptionComponent } from './forms-description/forms.description.component';
import { FormsExampleComponent } from './forms-example/forms.example.component';
import { TeamAdminComponent } from './forms-example/team-admin/team-admin.component';
import { TeamDetailComponent } from './forms-example/team-detail/team-detail.component';
import { TeamListComponent } from './forms-example/team-list/team-list.component';
import { TeamTemplateFormComponent } from './forms-example/team-template-form/team-template-form.component';
import { TeamReactiveFormComponent } from './forms-example/team-reactive-form/team-reactive-form.component';

// Directives
import { PanelColoringDirective } from './forms-example/panel-coloring.directive';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        FormsRoutes
    ],
    exports: [],
    declarations: [
        //Components
        FormsDescriptionComponent,
        FormsExampleComponent,
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
    ],
})
export class FormModule { }
