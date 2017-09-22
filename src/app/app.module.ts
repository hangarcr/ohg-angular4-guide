// Global
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Importing Routes
import { AppRoutingModule } from './app.routes';

// Modules
import { SharedModule } from './shared/shared.module';

// Services

// Components
import { AppComponent } from "./app.component";

import { HeaderComponent } from './shared/header/header.component';

// Component
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
import { ExampleComponent } from './sample/example.component';

@NgModule({
    declarations: [ // Components that are going to work in this module
        AppComponent,
        HeaderComponent,

        IntroComponent,
        SetupComponent,
        ModulesComponent,
        ComponentsComponent,
        DirectivesComponent,
        ServicesComponent,
        ObservablesComponent,
        FormsComponent,
        PipesComponent,
        HttpComponent,
        RoutingComponent,
        OptimizingComponent,
        ExampleSectionComponent,
        ExampleComponent
    ],
    imports: [ // Required modules to work in this module
        BrowserModule,
        SharedModule,
        FormsModule,
        AppRoutingModule        
    ],
    exports: [ // Exports modules to work with parent modules

    ],
    providers: [ // Call common services in the app
        
    ],
    bootstrap: [ // Root component when app loads
        AppComponent
    ]
})

export class AppModule { }