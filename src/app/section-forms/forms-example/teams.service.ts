import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// Model
import { Team } from './team.model';

export class TeamService {

    teams: Team[] = [
        new Team('Saprissa', 33, 1935),
        new Team('Alajuelense', 29, 1919),
        new Team('Heredia', 26, 1921),
        new Team('Cartago', 3, 1906),
        new Team('Puntarenas', 2, 1940)
    ];

    teamSelect: Team;
    
    // Subject
    selectedTeam = new Subject<Team>();

    constructor() { }

    selectTeam(team: Team) {
        this.teamSelect = team;
        this.selectedTeam.next(this.teamSelect);
    }   

    addTeam(team:Team) {
        this.teams.push(team);
    }

    deleteTeam(index: number) {       
        //Saving team deleted
        const temporalTeam = this.teams[index];

        // Removing the team
        this.teams.splice(index, 1);

        // If team deleted is the selected, change to the first one
        if(temporalTeam.name == this.teamSelect.name) {
            this.selectedTeam.next(this.teams[0]);
        }
    }

}