import { Component } from '@angular/core';

@Component({
    selector: 'app-observables-description',
    templateUrl: 'observables.description.component.html'
})

export class ObservablesDescriptionComponent {

    description = {
        title: 'Observables',
        description: `
            Angular 2 works with an external library to handle Observables, this library is ReactiveX (rxJS)
            In ReactiveX an observer subscribes to an Observable. Then that observer reacts to whatever item or sequence of items the Observable emits.<br>
            Observers or Listeners should be destroyed on ngDestroy component's life cycle to keep performance`,
        custom: [
            {
                title: 'Subject',
                features: [
                    {
                        description: 'A subject is an observable'
                    },
                    {
                        description: 'Using a Subject allows your service to be used as both a publisher and a subscriber.'
                    },
                    {
                        description: 'An Rxjs subject implements both the Observable, and the Observer'
                    },
                    {
                        description: 'Should be unsubscribed on ngDestroy hook'
                    }
                ]
            }
        ],
        instructions: [
            `In /src/app/section-observables open observable-example folder`,
            `Please check team.service.ts to see how declare a subject and how emit a value`,
            `Open team-list/team-list.component.ts to see how listen a subject Observable and how unsubscribe it`
        ]
    }

    constructor() {}

}