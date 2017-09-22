import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Model
import { Team } from './../team.model';

// Services
import { TeamService } from './../teams.service';

@Component({
    selector: 'app-team-detail',
    templateUrl: 'team-detail.component.html'
})

export class TeamDetailComponent implements OnInit, OnDestroy {
    
    team: Team;
    myObs:Subscription; // Subscribe listener

    constructor(private teamSvc: TeamService) { 

        // Listen Subject from the Service, every time the user changes the team, 
        // this component listens to change the selected team
        this.myObs = this.teamSvc.selectedTeam.subscribe(
            (team:Team) => {
                this.team = team;
            },
            (error) => {
                console.log(error);
            }
        );
        
    }

    ngOnInit() {
        this.team = this.teamSvc.teamSelect;
    }

    // When component is destroyed, unsubscribe Subject listener (required for better performance)
    ngOnDestroy() {
        this.myObs.unsubscribe();
    }

}