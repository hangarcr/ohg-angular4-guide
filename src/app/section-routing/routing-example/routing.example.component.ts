import { Component, OnInit } from '@angular/core';

// Model
import { Team } from './team.model';

// Service
import { TeamService } from './teams.service';

@Component({
    selector: 'app-routing-example',
    templateUrl: 'routing.example.component.html'
})

export class RoutingExampleComponent implements OnInit {

    team: Team;
    btnText: string;

    constructor(private teamSvc: TeamService) {}

    ngOnInit() {
        this.btnText = this.teamSvc.isAdmin ? 'isAdmin' : 'isNotAdmin';
    }

    selectedTeam(team: Team) {
        this.team = team;
    }

    toggleAdmin() {
        this.teamSvc.toogleAdmin();

        this.btnText = this.teamSvc.isAdmin ? 'isAdmin' : 'isNotAdmin';
    }

}