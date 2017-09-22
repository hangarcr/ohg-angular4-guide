import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

// Model
import { Team } from './team.model';

@Injectable()
export class TeamService {

    teams: Team[] = [];
    teamSelect: Team;
    teamUrl: string = 'http://localhost:3000/teams/';
    isAdmin:boolean = true;


    // Subject
    selectedTeam = new Subject<Team>();
    teamsUpdated = new Subject<any>();

    constructor(private http: Http) { }

    getTeams() {
        return this.http.get(this.teamUrl)
            .map((response:Response) => {
                const teams = response.json().obj;
                let newTeams: Team[] = [];

                for(let team of teams){
                    newTeams.push(new Team(
                        team._id,
                        team.name,
                        team.championships,
                        team.year
                    ));
                }
                this.teams = newTeams;
                return this.teams;
            })
            .catch((error:Response) => {
                return Observable.throw(error.json());
            });
    }

    selectTeam(team: Team) {
        this.teamSelect = team;
        this.selectedTeam.next(this.teamSelect);
    }   

    addTeam(team:Team) {        
        const body = JSON.stringify(team),
              header = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.teamUrl, body, {headers: header})
            .map((response: Response) => {
                const team = response.json().obj;                                
                this.teams.push(new Team(
                    team._id,
                    team.name,
                    team.championships,
                    team.year
                ));
                
                this.teamsUpdated.next(this.teamSelect);

                return team;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    deleteTeam(team: Team) {       
        return this.http.delete(`${this.teamUrl}/${team.id}`)
            .map((response:Response) => {
                this.teams.splice(this.teams.indexOf(team), 1);

                if(this.teams && team.name == this.teamSelect.name) {
                    this.selectedTeam.next(this.teams[0]);
                } else if (!this.teams) {
                    this.selectedTeam.next(null);
                }

                this.teamsUpdated.next(this.teamSelect);

                return response.json();                
            })
            .catch((error:Response) => {
                return Observable.throw(error.json());
            });
    }


    toogleAdmin() {
        this.isAdmin = !this.isAdmin;
    }

}