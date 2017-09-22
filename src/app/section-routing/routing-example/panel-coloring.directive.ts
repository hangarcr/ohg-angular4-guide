import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[panel-coloring]' })
export class PanelColoringDirective implements OnInit {

    @Input() panelType: string;

    constructor(private element:ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, this.panelType);
    }

}