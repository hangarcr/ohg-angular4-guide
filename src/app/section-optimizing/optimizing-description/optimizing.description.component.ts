import { Component } from '@angular/core';

@Component({
    selector: 'app-section-optimizing',
    templateUrl: 'optimizing.description.component.html'
})

export class OptimizingDescriptionComponent {

    description = {
        title: 'Optimizing',                
        custom: [
            {
                title: 'Child Modules',
                features: [
                    {
                        description: 'If our app is built in different sections, the best way to work is creating modules and call it in one parent module.'
                    },
                    {
                        description: 'An app always is going to have core components(header, footer, nav..) or shared resources(directives, services, pipes...). The best way is create a Core Module and Share Module.'
                    },
                    {
                        description: 'If the app has some sections, for example, one admin section and other user section, so we can create 2 separate modules to have a better organization of the code.'
                    },
                    {
                        description: 'IMPORTANT: is a best practice that each child module imports the CommonModule, this module provide the core functionality of Angular'
                    }
                ]
            },
            {
                title: 'Lazy Loading',
                features: [
                    {
                        description: 'The other advantage to create separate modules is the use of lazy loading in our app.'
                    },
                    {
                        description: 'The lazy loading helps to load different sections of the app, only when the user demand it.'
                    },
                    {
                        description: `If the user doesn't visit a section, the app is not going to load the logic related and the performance of the is going to be better.`
                    }
                ]
            },
            {
                title: 'JiT vs AoT'
            },
            {
                title: 'Just in Time',
                features: [
                    {
                        description: 'Compile TypeScript just in time for executing it.'
                    },
                    {
                        description: 'Compiled in the browser.'
                    },
                    {
                        description: `Each file compiled separately.`
                    },
                    {
                        description: `No need to build after changing your code and before reloading the browser page.`
                    },
                    {
                        description: `Suitable for local development.`
                    }
                ]
            },
            {
                title: 'Ahead of Time',
                features: [
                    {
                        description: 'Compile TypeScript during build phase.'
                    },
                    {
                        description: 'Compiled by the machine itself, via the command line (Faster).'
                    },
                    {
                        description: `All code compiled together, inlining HTML/CSS in the scripts.`
                    },
                    {
                        description: `No need to deploy the compiler (Half of Angular size).`
                    },
                    {
                        description: `More secure, original source not disclosed.`
                    },
                    {
                        description: `Suitable for production builds.`
                    }
                ]
            }
        ],
        instructions: [
            `To see child modules, please open any section-name folder and see the structure. Then please check parent node app.module to see how to import the child modules`,
            `To see lazy loading, please check app.routes files, and check the way to load the module with #reference`,
            `To see AoT on action, in the console run "npm run build:prod"`
        ]
    }

    constructor() {}

}