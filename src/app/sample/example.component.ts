import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { Enterprise } from './enterprise.model'; // Model

@Component({
    selector: 'app-sample',
    templateUrl: 'example.component.html'
})

export class ExampleComponent implements OnInit, OnDestroy {

    @Input() location:string;
    @Output() sendInfo: EventEmitter<string> = new EventEmitter<string>();    

    name:string = "Hangar";
    employees: number = 150;

    enterprises: Enterprise[] = [
        new Enterprise('The Hangar', 150, 'Heredia', true),
        new Enterprise('EX2 Outcoding', 90, 'Desamparados', false),
        new Enterprise('Accenture', 300, 'Heredia', false),
    ]

    constructor() { }

    // Events
    print() {
        console.log(this.name);
    }

    send(){
        this.sendInfo.emit(
            `My enterprise is ${this.name}, and is located in ${this.location}, we are ${this.employees} employees`
        )
    }

    // Life Cycle Hooks
    ngOnInit() { 
        console.log('Component View loaded!');
    }

    ngOnDestroy() {
        console.log('Component destroyed!');
    }

}