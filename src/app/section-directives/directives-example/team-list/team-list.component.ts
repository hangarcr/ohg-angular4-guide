import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// Model
import { Team } from './../team.model';

@Component({
    selector: 'app-team-list',
    templateUrl: 'team-list.component.html'
})

export class TeamListComponent implements OnInit {

    @Input() teams: Team[]; // Receive teams object from parent component as param
    @Output() selectedTeam: EventEmitter<Team> = new EventEmitter<Team>(); // Set a eventEmitter to output team selected to the parent
    activeTeam: Team;

    constructor() { }

    selectTeam(team: Team) {
        this.activeTeam = team;

        // Fires EventEmitter
        this.selectedTeam.emit(team);
    }

    ngOnInit() {
        this.activeTeam = this.teams[0];
        this.selectedTeam.emit(this.activeTeam);
    }

}