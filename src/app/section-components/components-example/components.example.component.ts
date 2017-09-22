import { Component } from '@angular/core';

// Model
import { Team } from './team.model';

@Component({
    selector: 'app-components-example',
    templateUrl: 'components.example.component.html'
})

export class ComponentsExampleComponent {

    teams: Team[] = [
        new Team('Saprissa', 33, 1935),
        new Team('Alajuelense', 29, 1919),
        new Team('Heredia', 26, 1921),
        new Team('Cartago', 3, 1906),
        new Team('Puntarenas', 2, 1940)
    ];

    team: Team;

    constructor() {}

    selectedTeam(team: Team) {
        this.team = team;
    }

}