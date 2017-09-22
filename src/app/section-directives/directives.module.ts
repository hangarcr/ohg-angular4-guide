import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { DirectivesRoutes } from './directives.routes';

// Components
import { DirectivesDescriptionComponent } from './directives-description/directives.description.component';
import { DirectivesExampleComponent } from './directives-example/directives.example.component';
import { TeamDetailComponent } from './directives-example/team-detail/team-detail.component';
import { TeamListComponent } from './directives-example/team-list/team-list.component';

// Directive
import { PanelColoringDirective } from './directives-example/panel-coloring.directive';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DirectivesRoutes
    ],
    exports: [],
    declarations: [
        // Components
        DirectivesDescriptionComponent,
        DirectivesExampleComponent,
        TeamDetailComponent,
        TeamListComponent,
        // Directive
        PanelColoringDirective
    ],
    providers: [],
})
export class DirectivesModule { }
