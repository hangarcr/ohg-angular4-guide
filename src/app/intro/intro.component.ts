import { Component } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: 'intro.component.html'
})

export class IntroComponent {

    description = {
        title: 'Angular JS',
        description: `AngularJS is a structural framework for dynamic web apps.`,
        custom: [
            {
                title: 'Angular 1 vs Angular 2'
            },
            {
                title: 'Why Angular 2?'
            },
            {
                title: 'ES6 & Typescript',
            },
            {
                title: 'Export Classes and Imports'
            },
            {
                title: 'Decorators',            
            }
        ]
    }
    
    constructor() { }

}