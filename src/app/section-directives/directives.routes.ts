import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DirectivesDescriptionComponent } from './directives-description/directives.description.component';
import { DirectivesExampleComponent } from './directives-example/directives.example.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: DirectivesDescriptionComponent },
  { path: 'example', component: DirectivesExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class DirectivesRoutes { }