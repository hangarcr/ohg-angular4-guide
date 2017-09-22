import { Component } from '@angular/core';

// Model
import { Team } from './team.model';

@Component({
    selector: 'app-services-example',
    templateUrl: 'services.example.component.html'
})

export class ServicesExampleComponent {

    team: Team;

    constructor() {}

    selectedTeam(team: Team) {
        this.team = team;
    }

}