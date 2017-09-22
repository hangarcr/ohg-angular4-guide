import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes-description',
    templateUrl: 'pipes.description.component.html'
})

export class PipesDescriptionComponent {

    description = {
        title: 'Pipes',
        description: `Help to format or transform how data was displayed in our templates.<br>
                        Pipes should be declared in declarations array on the NgModule`,
        decorator: [
            {
                title: 'name',
                description: `Pipe's name to be used on DOM element`
            }
        ],
        instructions: [
            `In /src/app/section-pipes open pipes.module.ts to see how declare a pipe on a module`,
            `In /src/app/section-pipes open pipes-example folder.`,
            `To see a normal pipe, you can open calculate-age.pipe.ts`,
            `To see a filter pipe, you cna open search-filter.pipe.ts`,
            `open team-detail/team-detail.component.ts and find calculateAge to see how use a pipe in the template`
        ]
    }

    constructor() {}

}