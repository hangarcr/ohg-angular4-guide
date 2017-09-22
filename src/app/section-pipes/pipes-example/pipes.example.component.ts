import { Component } from '@angular/core';

// Model
import { Team } from './team.model';

@Component({
    selector: 'app-pipes-example',
    templateUrl: 'pipes.example.component.html'
})

export class PipesExampleComponent {

    team: Team;

    constructor() {}

    selectedTeam(team: Team) {
        this.team = team;
    }

}