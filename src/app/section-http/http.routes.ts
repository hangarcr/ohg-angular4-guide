import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HttpExampleComponent } from './http-example/http.example.component';
import { HttpDescriptionComponent } from './http-description/http.description.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'description', pathMatch: 'full' },
  { path: 'description', component: HttpDescriptionComponent },
  { path: 'example', component: HttpExampleComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class HttpRoutes { }