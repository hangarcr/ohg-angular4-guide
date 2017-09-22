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
        this.teams = this.teamSvc.teams;
    }

    deleteTeam(index:number) {
        this.teamSvc.deleteTeam(index);
    }

}