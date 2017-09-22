import { Component, OnInit } from '@angular/core';

// Model
import { Team } from './../team.model';

// Services
import { TeamService } from './../teams.service';

@Component({
    selector: 'app-team-detail',
    templateUrl: 'team-detail.component.html'
})

export class TeamDetailComponent implements OnInit {
    
    team: Team;

    constructor(private teamSvc: TeamService) { 

        // Listen EventEmitter from the Service, every time the user changes the team, 
        // this component listen to change the selected team
        this.teamSvc.selectedTeam.subscribe((team:Team) => {
            this.team = team;
        });
        
    }

    ngOnInit() {
        this.team = this.teamSvc.teamSelect;
    }

}