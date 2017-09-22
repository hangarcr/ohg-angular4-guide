import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ComponentsDescriptionComponent } from './components-description/components.description.component';
import { ComponentsExampleComponent } from './components-example/components.example.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: ComponentsDescriptionComponent },
  { path: 'example', component: ComponentsExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class ComponentsRoutes { }