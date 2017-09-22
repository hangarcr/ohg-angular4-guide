import { EventEmitter, Injectable } from '@angular/core';

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

    selectedTeam: EventEmitter<Team> = new EventEmitter<Team>();

    constructor() { }

    selectTeam(team: Team) {
        this.teamSelect = team;
        this.selectedTeam.emit(this.teamSelect);
    }   

    deleteTeam(index: number) {       
        //Saving team deleted
        const temporalTeam = this.teams[index];

        // Removing the team
        this.teams.splice(index, 1);

        // If team deleted is the selected, change to the first one
        if(temporalTeam.name == this.teamSelect.name) {
            this.selectTeam(this.teams[0]);
        }
    }

}