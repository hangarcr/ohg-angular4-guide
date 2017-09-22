import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-team-section',
    templateUrl: 'team-section.component.html'
})

export class TeamSectionComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.route);
    }
    
}