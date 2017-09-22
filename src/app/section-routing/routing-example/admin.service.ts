import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TeamService } from './teams.service';

@Injectable()
export class AdminService implements CanActivate {

  constructor(private teamSvc:TeamService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.teamSvc.isAdmin;
  }

}
