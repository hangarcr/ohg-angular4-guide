import { Component } from '@angular/core';

@Component({
    selector: 'app-section-modules',
    templateUrl: 'modules.description.component.html'
})

export class ModulesDescriptionComponent {

    description = {
        title: 'Modules',
        description: `A module in Angular is a class that encapsulates a section of the app.<br>
                      With the module we can organize our app, also indicates which components, directives, services.... are going to be required to run succesfully the app.<br>
                      We can set one root module and some children modules.`,
        decorator: [
            {
                title: 'declarations',
                description: 'This array sets all the components, directives and pipes that are going to be used in the module'
            },
            {
                title: 'imports',
                description: 'This array sets all the modules and routes that are going to be used in the module'
            },
            {
                title: 'exports',
                description: 'This array exports all the features to the parent module'
            },
            {
                title: 'providers',
                description: 'This array sets all the shared services that are going to be shered between the module'
            },
            {
                title: 'bootstrap',
                description: 'This array sets the component displayed when app loads'
            }
        ],        
        instructions: [
            `In /src/app open section-component folder`,
            `THen open components.module.ts to see an example`
        ]
    }

    constructor() {}

}