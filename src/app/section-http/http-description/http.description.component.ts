import { Component } from '@angular/core';

@Component({
    selector: 'app-http-description',
    templateUrl: 'http.description.component.html'
})

export class HttpDescriptionComponent {

    description = {
        title: 'Http',
        description: `Angular has a module to do HTTP requests, the module is HttpModule and should be imported
        in our NgModule`,
        custom: [
            {
                title: 'GET, POST, DELETE...',
                features: [
                    {
                        description: 'Http requests work as an observable, after send the request to an API, we can handle the response with .map() for success or with .catch() for errors'
                    }
                ]
            },
            {
                title: '.map()',
                features: [
                    {
                        description: 'This callback function handle any success response.'
                    }
                ]
            },
            {
                title: '.catch()',
                features: [
                    {
                        description: 'This callback function handle any error response.'
                    }
                ]
            },
            {
                title: 'Components .subscribe()',
                features: [
                    {
                        description: 'In our components, to listen a http request we need implement .subscribe() listener methos.'
                    },
                    {
                        description: 'This methos receive 3 types of callback, the first one for success, the second one for error, and a third one for completed.'
                    }
                ]
            },
            {
                title: 'MEAN',
                features: [
                    {
                        title: 'MongoDB:',                        
                        description: 'Database that can be worked with JS'
                    },
                    {
                        title: 'Express:',                        
                        description: 'NodeJS Framework to create a local server and API routes'
                    },
                    {
                        title: 'Angular:',                        
                        description: 'To create all the Front End of the app'
                    },
                    {
                        title: 'NodeJS:',                        
                        description: 'To create all the logic from the server and connect with the client side'
                    }
                ]
            }
        ],
        instructions: [
            `Open section-http folder`,
            `To see how import HttpModule please open http.module.ts`,
            `Open http-example and open team.service to see http requests`,
            `Open team-list/team-list.component.ts to see how listener a http request from a service`
        ]
    }

    constructor() {}

}