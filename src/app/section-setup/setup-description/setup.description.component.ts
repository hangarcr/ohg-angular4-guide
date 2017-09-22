import { Component } from '@angular/core';

@Component({
    selector: 'app-setup-description',
    templateUrl: 'setup.description.component.html'
})

export class SetupDescriptionComponent {

    description = {
        title: 'Setup',
        custom: [
            {
                title: 'main.ts',
                features: [
                    {
                        description: 'Angular 2 needs setup ES5 and ES6 pollyfills to work well in all browsers'
                    },
                    {
                        title: 'zone.js:',
                        description: 'provides a mechanism, called zones, for encapsulating and intercepting asynchronous activities in the browser. Angular use this library to track the start and completion of asynchronous activities and perform tasks as required'
                    },
                    {
                        title: 'platformBrowserDynamic:',
                        description: 'With this class, we can run up the app, me should use .bootstrapModule(moduleName) to set the root module when the app loads.'
                    }
                ]
            },
            {
                title: 'Root Module',
                features: [
                    {
                        description: 'Root module should import BrowserModule to has the most fundamental logic of angular'
                    },
                    {
                        description: 'Root module should has bootstrap property in the decorator to indicate which component should be displayes when app loads.'
                    }
                ]
            }
        ],
        instructions: [
            `Open main.ts to see setup file`,
            `Open app.module to see root module`
        ]
    }

    constructor() {}

}