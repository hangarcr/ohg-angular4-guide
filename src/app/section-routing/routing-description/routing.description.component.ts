import { Component } from '@angular/core';

@Component({
    selector: 'app-routing-description',
    templateUrl: 'routing.description.component.html'
})

export class RoutingDescriptionComponent {

    description = {
        title: 'Routing',
        description: `A module is a class that takes the metadata object. This metadata tells Angular how to compile and run module code. It identifies the module's own components, directives, pipes, etc.`,
        decorator: [
            {
                title: 'declarations',
                description: 'Components that are going to work in this module'
            },
            {
                title: 'imports',
                description: 'Required modules to work in this module'
            },
            {
                title: 'exports',
                description: 'Exports modules to work with parent modules'
            },
            {
                title: 'providers',
                description: 'Call common services in the app'
            },
            {
                title: 'bootstrap',
                description: 'Root component when app loads'
            }
        ],
        custom: [
            {
                title: 'Custom',
                features: [
                    {
                        title: 'feature',
                        description: 'feature description'
                    },
                    {
                        title: 'feature',
                        description: 'feature description'
                    },
                    {
                        title: 'feature',
                        description: 'feature description'
                    },
                ]
            },
            {
                title: 'Custom 2',
                features: [
                    {
                        title: 'feature',
                        description: 'feature description'
                    },
                    {
                        title: 'feature',
                        description: 'feature description'
                    },
                    {
                        title: 'feature',
                        description: 'feature description'
                    },
                ]
            }
        ],
        instructions: [
            `Instruction 1`,
            `Instruction 2`,
            `Instruction 3`
        ]
    }

    constructor() {}

}