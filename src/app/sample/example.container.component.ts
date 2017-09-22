import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: 'example.container.component.html'
})

export class ExampleSectionComponent{

    constructor() { }
    
    printInfo(event) {
        console.log(event);
    }

}