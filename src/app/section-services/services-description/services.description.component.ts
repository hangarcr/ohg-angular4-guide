import { Component } from '@angular/core';

@Component({
    selector: 'app-services-description',
    templateUrl: 'services.description.component.html'
})

export class ServicesDescriptionComponent {

    description = {
        title: 'Services',
        description: `A service is a class with reusable functionality. <br> 
            A service is used when a common functionality needs to be provided to various modules.<br>
            The service should be called in providers array in the NgModule<br>
            In the components, we should import the service and instance it as a private variable in constructor function`,
        decorator: [
            {
                title: '@Injectable( )',
                description: 'If the service needs to import an external service, the service should has this decorator to indicate it.'
            }
        ],
        instructions: [
            `In /src/app/section-services open services.module.ts to see how declare a service on a module`,
            `In /src/app/section-services open services-example folder.`,
            `To see the service please open teams.service.ts`,
            `Open team-list/team-list.component.ts to see how import a service to a component and use it`
        ]
    }

    constructor() {}

}