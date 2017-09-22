import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IntroComponent } from './intro/intro.component';
import { SetupComponent } from './section-setup/setup.component';
import { ModulesComponent } from './section-modules/modules.component';
import { ComponentsComponent } from './section-components/components.component';
import { DirectivesComponent } from './section-directives/directives.component';
import { ServicesComponent } from './section-services/services.component';
import { ObservablesComponent } from './section-observables/observables.component';
import { FormsComponent } from './section-forms/forms.component';
import { PipesComponent } from './section-pipes/pipes.component';
import { HttpComponent } from './section-http/http.component';
import { RoutingComponent } from './section-routing/routing.component';
import { OptimizingComponent } from './section-optimizing/optimizing.component';
import { ExampleSectionComponent } from './sample/example.container.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'setup', component: SetupComponent, loadChildren: './section-setup/setup.module#SetupModule' },
  { path: 'modules', component: ModulesComponent, loadChildren: './section-modules/modules.module#ModulesModule' },
  { path: 'components', component: ComponentsComponent, loadChildren: './section-components/components.module#ComponentsModule' },
  { path: 'directives', component: DirectivesComponent, loadChildren: './section-directives/directives.module#DirectivesModule' },
  { path: 'services', component: ServicesComponent, loadChildren: './section-services/services.module#ServicesModule' },
  { path: 'observables', component: ObservablesComponent, loadChildren: './section-observables/observables.module#ObservablesModule' },
  { path: 'forms', component: FormsComponent, loadChildren: './section-forms/forms.module#FormModule' },
  { path: 'pipes', component: PipesComponent, loadChildren: './section-pipes/pipes.module#PipesModule' },
  { path: 'http', component: HttpComponent, loadChildren: './section-http/http.module#HttpsModule' },
  { path: 'routing', component: RoutingComponent, loadChildren: './section-routing/routing.module#RoutingModule' },
  { path: 'optimizing', component: OptimizingComponent, loadChildren: './section-optimizing/optimizing.module#OptimizingModule' },
  { path: 'example', component: ExampleSectionComponent },
  { path: '**', redirectTo: '/intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }