import { Component, EventEmitter, OnInit } from '@angular/core';

import { TeamService } from './../teams.service';

// Model
import { Team } from './../team.model';

@Component({
    selector: 'app-team-list',
    templateUrl: 'team-list.component.html'
})

export class TeamListComponent implements OnInit {

    teams: Team[];
    activeTeam: Team;

    constructor(private teamSvc:TeamService) { 

        // Listen EventEmitter from the Service, every time the user changes the team, 
        // this component listen to change the selected team
        this.teamSvc.selectedTeam.subscribe((team:Team) => {
            this.activeTeam = team;
        });

    }

    selectTeam(team: Team) {
        this.activeTeam = team;
        this.teamSvc.selectTeam(team);
    }

    ngOnInit() {
        this.teams = this.teamSvc.teams;
        this.activeTeam = this.teams[0];
        this.teamSvc.selectTeam(this.teams[0]);
    }

}