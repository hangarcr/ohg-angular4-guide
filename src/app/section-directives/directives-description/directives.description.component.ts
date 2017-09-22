import { Component } from '@angular/core';

@Component({
    selector: 'app-directives-description',
    templateUrl: 'directives.description.component.html'
})

export class DirectivesDescriptionComponent {

    description = {
        title: 'Directives',
        description: `Directives allow you to attach behavior to elements in the DOM.<br>
                        Directives are split into the following 3 categories: Attribute, Structural and Component.`,
        decorator: [
            {
                title: 'selector',
                description: `Directive's attribute name`
            }
        ],
        custom: [
            {
                title: 'Structural Directives',
                features: [
                    {
                        title: 'ngIf:',
                        description: 'The ngif element is used to add elements to the HTML code if it evaluates to true, else it will not add the elements to the HTML code.'
                    },
                    {
                        title: 'ngFor:',
                        description: 'The ngFor element is used to elements based on the condition of the For loop.'
                    },
                    {
                        title: 'ngClass:',
                        description: 'The ngClass element is used to add classes to the HTML code if it evaluates to true'
                    },
                    {
                        title: 'ngSwitch'
                    },
                    {
                        title: 'ngStyle'
                    }
                ]
            },
            {
                title: 'Attribute Directives',
                features: [
                    {
                        description: 'Custom Directives'
                    },
                    {
                        description: `A class can be created using @Directive decorator, this class is going to has all the custom directive's logic.`
                    },
                    {
                        description: `To attach one directive to a DOM element, the DOM element should has as attribute the Directive's selector name.`
                    },
                    {
                        description: `Custom directives also has Input parameters and Lyfe Cycle Hooks.`
                    }
                ]
            },
            {
                title: 'Component Directives',
                features: [
                    {
                        description: 'The component are the most used directives in one Angular 2 App'
                    }
                ]
            }
        ],
        instructions: [
            `In /src/app/section-DIRECTIVES open directives-example folder.`,
            `To see one custom directive class, please open panel-coloring.directive.ts file.`,
            `Open /team-detail/team-detail.component.html to see the directive applied in the DOM.`
        ]
    }

    constructor() {}

}