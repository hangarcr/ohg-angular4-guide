import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toggle-sections',
    templateUrl: 'toggle-sections.component.html'
})

export class ToggleSectionsComponent {

    @Input() descriptionLink:string;
    @Input() exampleLink:string;
    btnText:string = 'Example';
    isExample:boolean = false;
    
    constructor(private router:Router) { }

    toggleSection() {
        this.isExample = !this.isExample;
        this.btnText = this.isExample ? 'Description' : 'Example';

        if(this.isExample) {
            this.router.navigate([this.descriptionLink]);
        } else {
            this.router.navigate([this.exampleLink]);
        }
    }

}