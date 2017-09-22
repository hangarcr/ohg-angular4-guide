import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ObservablesDescriptionComponent } from './observables-description/observables.description.component';
import { ObservablesExampleComponent } from './observables-example/observables.example.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: ObservablesDescriptionComponent },
  { path: 'example', component: ObservablesExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class ObservablesRoutes { }