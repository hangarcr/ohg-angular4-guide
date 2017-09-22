import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SetupDescriptionComponent } from './setup-description/setup.description.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: SetupDescriptionComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class SetupRoutes { }