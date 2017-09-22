import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './../shared/shared.module';

// Routes
import { PipesRoutes } from './pipes.routes';

// Services
import { TeamService } from './pipes-example/teams.service';

// Pipes
import { CalculateAgePipe } from './pipes-example/calculate-age.pipe';
import { SearchFilterPipe } from './pipes-example/search-filter.pipe';

// Components
import { PipesDescriptionComponent } from './pipes-description/pipes.description.component';
import { PipesExampleComponent } from './pipes-example/pipes.example.component';
import { TeamAdminComponent } from './pipes-example/team-admin/team-admin.component';
import { TeamDetailComponent } from './pipes-example/team-detail/team-detail.component';
import { TeamListComponent } from './pipes-example/team-list/team-list.component';

// Directives
import { PanelColoringDirective } from './pipes-example/panel-coloring.directive';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        PipesRoutes
    ],
    exports: [],
    declarations: [
        // Components
        PipesDescriptionComponent,
        PipesExampleComponent,
        TeamAdminComponent,
        TeamDetailComponent,
        TeamListComponent,

        // Directives
        PanelColoringDirective,

        // Pipes
        CalculateAgePipe,
        SearchFilterPipe
    ],
    providers: [
        // Services
        TeamService
    ],
})
export class PipesModule { }
