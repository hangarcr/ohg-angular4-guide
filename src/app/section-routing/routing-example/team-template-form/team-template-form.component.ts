import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

// Model
import { Team } from './../team.model';

// Service
import { TeamService } from './../teams.service';

@Component({
    selector: 'app-template-team-form',
    templateUrl: 'team-template-form.component.html'
})

export class TeamTemplateFormComponent {

    constructor(private teamSvc: TeamService) { }

    addTeam(form:NgForm) {
        const newTeam = new Team(null, form.value.name, form.value.championships, form.value.year);
        this.teamSvc.addTeam(newTeam).subscribe(
            (team: Team) => {
                console.log(team);
            },
            (error) => {
                console.log(error);
            },
            () => {
                form.reset();
            }        
        );        
    }

    clearForm(form:NgForm) {
        form.reset();
    }
    
}