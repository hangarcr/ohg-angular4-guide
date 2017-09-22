import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
    transform(value: any, filterTeam:string, property:string): any {
        // If input is empty or not exist any team return the same value
        if(filterTeam == '' || value.length == 0) {
            return value;
        }

        let tempArray = [];
        for(let team of value) {
            if(team[property].includes(filterTeam)) {
                tempArray.push(team);
            }
        }

        return tempArray;
    }
}