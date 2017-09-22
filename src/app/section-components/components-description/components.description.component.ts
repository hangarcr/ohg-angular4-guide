import { Component } from '@angular/core';

@Component({
    selector: 'app-components-description',
    templateUrl: 'components.description.component.html'
})

export class ComponentsDescriptionComponent {

    description = {
        title: 'Components',
        description: `Components are the most basic building block of an UI in an Angular application.<br>
                    An Angular application is a tree of Angular components.<br>
                    Angular components are a subset of directives.`,
        decorator: [
            {
                title: 'selector',
                description: 'Selector that identifies this component in a template as an HTML tag'
            },
            {
                title: 'templateUrl',
                description: 'URL to an external file containing a template for the view'
            },
            {
                title: 'template',
                description: 'inline-defined template for the view'
            },
            {
                title: 'styleUrls',
                description: `list of urls to stylesheets to be applied to this component's view`
            },
            {
                title: 'styles',
                description: `inline-defined styles to be applied to this component's view`
            }
        ],
        custom: [
            {
                title: 'Databinding',
                features: [
                    {
                        title: 'Interpolation'
                    },
                    {
                        title: 'One Way Binding'
                    },
                    {
                        title: 'Two Way Binding'
                    },
                    {
                        title: 'Event Binding'
                    }
                ]
            },
            {
                title: 'Parameters',
                features: [
                    {
                        title: '@Input( ):',
                        description: 'We can pass data to a component from a parent component with Input parameters.'
                    },
                    {
                        title: '@Output( ):',
                        description: 'We can send back data one up level with Output parameter. This parameters use EventEmitter to send back the data'
                    }
                ]
            },
            {
                title: 'EventEmitter',
                features: [
                    {
                        description: 'EventEmitter is used to emit custom Events. Also this events can be listened when are emitted'
                    }
                ]
            },
            {
                title: 'Component Lifecycle Hooks',
                features: [
                    {
                        title: 'constructor:',
                        description: 'The constructor of the component class is called before any other component lifecycle hook. If our component is based on any dependencies, the constructor is the best place to inject those dependencies.'
                    },
                    {
                        title: 'ngOnInit:',
                        description: 'The ngOnInit method of a component is called directly after the constructor and after the ngOnChange is triggered for the first time. It is the perfect place for initialisation work.'
                    },
                    {
                        title: 'ngOnChanges:',
                        description: 'The ngOnChanges will be called first when the value of a bound property changes. It executes, every time the value of an input property changes.'
                    },
                    {
                        title: 'ngOnDestroy:',
                        description: 'The ngDestroy is called in a component’s lifecycle just before the instance of the component is finally destroyed. It is the perfect place to clean the component.'
                    },
                    {
                        title: 'ngAfterContentInit:',
                        description: 'The ngAfterContentInit lifecycle hook is called after ngOnInit when the component or directive’s content has been initialised; basically when all the bindings of the component have been checked for the first time.'
                    },
                    {
                        title: 'ngAfterViewInit:',
                        description: 'Called after ngAfterContentInit when the component’s view has been initialised.'
                    }
                ]                
            }
        ],
        instructions: [
            `In /src/app/section-components open components-example folder`,
            `This example works with 3 components. One parent and 2 children component, to see parent component, open components.example.component.ts`,
            `Open team-list folder to see one of the children component, this component show the list of teams`,
            `Open team-detail folder to see one of the children component, this component show the details of a team`
        ]
    }

    constructor() {}

}