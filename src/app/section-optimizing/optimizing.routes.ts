import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { OptimizingDescriptionComponent } from './optimizing-description/optimizing.description.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: OptimizingDescriptionComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class OptimizingRoutes { }