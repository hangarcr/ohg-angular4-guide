import { Component } from '@angular/core';

@Component({
    selector: 'app-forms-description',
    templateUrl: 'forms.description.component.html'
})

export class FormsDescriptionComponent {

    description = {
        title: 'Forms',
        description: `
            Angular has 2 types of forms, Template Driven Forms and Reactive Forms<br>
            Template Driven Forms: We should import FormsModule in out NgModule<br>
            Reactve Forms: We should import ReactiveFormsModule in out NgModule
        `,
        custom: [
            {
                title: 'Template Driven Forms',
                features: [
                    {
                        description: 'Easy to use'
                    },
                    {
                        description: 'Similar to Angular 1'
                    },
                    {
                        description: 'Minimal code in the components'
                    },
                ]
            },
            {
                title: 'Reactive Forms',
                features: [
                    {
                        description: 'More flexible and complex scenarios'
                    },
                    {
                        description: 'Better validations'
                    },
                    {
                        description: 'Easier unit testing'
                    },
                ]
            }
        ],
        instructions: [
            `Open section-forms folder`,
            `To check how import forms modules in our NgModule, please open forms.module.ts`,
            `Open forms-example folder`,
            `To see Template Drive Form, please open team-template-form folder`,
            `To see Reactive Form, please open team-reactive-form folder`
        ]
    }

    constructor() {}

}