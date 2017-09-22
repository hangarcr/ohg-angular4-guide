import { Component } from '@angular/core';

// Model
import { Team } from './team.model';

@Component({
    selector: 'app-forms-example',
    templateUrl: 'forms.example.component.html'
})

export class FormsExampleComponent {

    team: Team;

    constructor() {}

    selectedTeam(team: Team) {
        this.team = team;
    }

}