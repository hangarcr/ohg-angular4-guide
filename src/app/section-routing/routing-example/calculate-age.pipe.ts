import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculateAge'
})

export class CalculateAgePipe implements PipeTransform {
    transform(value: number): string {
        const currentYear:number = new Date().getFullYear(),
              age:number = currentYear - value,
              word:string = age > 1 ? 'years' : 'year';

        return `${age} ${word} old`;
    }
}