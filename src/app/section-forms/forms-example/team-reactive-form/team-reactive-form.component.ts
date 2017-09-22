import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Model
import { Team } from './../team.model';

// Service
import { TeamService } from './../teams.service';

@Component({
    selector: 'app-reactive-team-form',
    templateUrl: 'team-reactive-form.component.html'
})

export class TeamReactiveFormComponent implements OnInit {

    teamForm:FormGroup;

    constructor(private teamSvc: TeamService) { }

    ngOnInit() { 
        this.teamForm = new FormGroup({
            "name": new FormControl(null, Validators.required),
            "championships": new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
            "year": new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
        });
    }

    addTeam() {
        const newTeam = new Team(this.teamForm.value.name, this.teamForm.value.championships, this.teamForm.value.year);
        this.teamSvc.addTeam(newTeam);
        this.teamForm.reset();
    }

    clearForm() {
        this.teamForm.reset();
    }
    
}