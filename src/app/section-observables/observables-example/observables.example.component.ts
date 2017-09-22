import { Component } from '@angular/core';

// Model
import { Team } from './team.model';

@Component({
    selector: 'app-observables-example',
    templateUrl: 'observables.example.component.html'
})

export class ObservablesExampleComponent {

    team: Team;

    constructor() {}

    selectedTeam(team: Team) {
        this.team = team;
    }

}