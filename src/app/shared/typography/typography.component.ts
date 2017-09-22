import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-typo',
    templateUrl: 'typography.component.html'
})

export class TypographyComponent {

    @Input() description: any;

    constructor() {
        
    }
    
}