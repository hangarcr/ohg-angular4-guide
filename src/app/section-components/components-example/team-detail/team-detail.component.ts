import { Component, Input } from '@angular/core';

// Model
import { Team } from './../team.model';

@Component({
    selector: 'app-team-detail',
    templateUrl: 'team-detail.component.html'
})

export class TeamDetailComponent {
    
    @Input() team: Team;

    constructor() { }

}