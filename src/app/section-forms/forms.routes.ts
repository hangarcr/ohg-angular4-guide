import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FormsDescriptionComponent } from './forms-description/forms.description.component';
import { FormsExampleComponent } from './forms-example/forms.example.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: FormsDescriptionComponent },
  { path: 'example', component: FormsExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class FormsRoutes { }