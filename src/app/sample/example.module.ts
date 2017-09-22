import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser'; // Core Angular Features
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// Decorator
@NgModule({
    imports: [ //Import External Modules and Routes
        // Modules
        BrowserModule,
        HttpModule,
        // Routes
        AppRoutingModule
    ],
    declarations: [ //Import Components, Directives and Pipes
        AppComponent
    ],
    providers: [ //Import Services
        
    ],
    bootstrap: [AppComponent] // Root Component
})
export class AppModule { }
