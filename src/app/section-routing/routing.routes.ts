import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AdminService } from './routing-example/admin.service';

// Components
import { RoutingExampleComponent } from './routing-example/routing.example.component';
import { RoutingDescriptionComponent } from './routing-description/routing.description.component';
import { TeamSectionComponent } from './routing-example/team-section/team-section.component';
import { TeamAdminSectionComponent } from './routing-example/team-admin-section/team-admin-section.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: RoutingDescriptionComponent },
  { path: 'example', component: RoutingExampleComponent, 
    children: [
        { path: '', redirectTo: 'teams/myParam', pathMatch: 'full' },
        { path: 'teams/:param', component: TeamSectionComponent },
        { path: 'admin', component: TeamAdminSectionComponent, canActivate: [AdminService] },
        { path: '**', redirectTo: 'teams/myParam' }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class RoutingRoutes { }