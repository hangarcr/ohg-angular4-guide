import { Component, OnInit } from '@angular/core';

// Model
import { Team } from './../team.model';

// Service
import { TeamService } from './../teams.service';

@Component({
    selector: 'app-team-admin',
    templateUrl: 'team-admin.component.html'
})

export class TeamAdminComponent implements OnInit {

    teams: Team[];
    filterTeam:string = '';

    constructor(private teamSvc:TeamService) { }

    ngOnInit() { 
        this.teamSvc.getTeams().subscribe(
            (teams: Team[]) => {                
                this.teams = this.teamSvc.teams;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    deleteTeam(team:Team) {
        this.teamSvc.deleteTeam(team).subscribe(
            (response: Team[]) => {             
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }

}