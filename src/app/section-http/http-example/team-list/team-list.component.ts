import { Response } from '@angular/http';
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
    teamSelectedObs:Subscription; // Subscribe listener
    teamsUpdatedObs:Subscription; // Subscribe listener

    constructor(private teamSvc:TeamService) { 

        // Listen Subject from the Service, every time the user changes the team, 
        // this component listens to change the selected team
        this.teamSelectedObs = this.teamSvc.selectedTeam.subscribe(
            (team:Team) => {
                this.activeTeam = team;
            },
            (error) => {
                console.log(error);
            }
        );


        this.teamsUpdatedObs = this.teamSvc.teamsUpdated.subscribe(
            (team:Team) => {
                this.teams = this.teamSvc.teams;
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
        this.teamSvc.getTeams().subscribe(
            (teams: Team[]) => {
                this.teams = this.teamSvc.teams;

                if(this.teams){
                    this.activeTeam = this.teams[0];
                    this.teamSvc.selectTeam(this.teams[0]);
                } 
            },
            (error) => {
                console.log(error);
            }
        );               
    }

    // When component is destroyed, unsubscribe Subject listener (required for better performance)
    ngOnDestroy() {
        this.teamSelectedObs.unsubscribe();
        this.teamsUpdatedObs.unsubscribe();
    }

}