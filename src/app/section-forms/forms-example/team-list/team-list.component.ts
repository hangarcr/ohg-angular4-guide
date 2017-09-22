import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TeamService } from './../teams.service';

// Model
import { Team } from './../team.model';

@Component({
    selector: 'app-team-list',
    templateUrl: 'team-list.component.html'
})

export class TeamListComponent implements OnInit, OnDestroy {

    teams: Team[];
    activeTeam: Team;
    myObs:Subscription; // Subscribe listener

    constructor(private teamSvc:TeamService) { 

        // Listen Subject from the Service, every time the user changes the team, 
        // this component listens to change the selected team
        this.myObs = this.teamSvc.selectedTeam.subscribe(
            (team:Team) => {
                this.activeTeam = team;
            },
            (error) => {
                console.log(error);
            }
        );

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

    // When component is destroyed, unsubscribe Subject listener (required for better performance)
    ngOnDestroy() {
        this.myObs.unsubscribe();
    }

}