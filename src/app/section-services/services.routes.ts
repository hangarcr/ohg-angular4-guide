import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ServicesDescriptionComponent } from './services-description/services.description.component';
import { ServicesExampleComponent } from './services-example/services.example.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: ServicesDescriptionComponent },
  { path: 'example', component: ServicesExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class ServicesRoutes { }