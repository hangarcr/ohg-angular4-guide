import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PipesDescriptionComponent } from './pipes-description/pipes.description.component';
import { PipesExampleComponent } from './pipes-example/pipes.example.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: PipesDescriptionComponent },
  { path: 'example', component: PipesExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class PipesRoutes { }