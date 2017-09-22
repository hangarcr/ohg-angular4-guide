import { Component } from '@angular/core';

// Model
import { Team } from './team.model';

@Component({
    selector: 'app-http-example',
    templateUrl: 'http.example.component.html'
})

export class HttpExampleComponent {

    team: Team;

    constructor() {}

    selectedTeam(team: Team) {
        this.team = team;
    }

}