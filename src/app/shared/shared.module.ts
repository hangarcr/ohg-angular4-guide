import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TypographyComponent } from './typography/typography.component';
import { ToggleSectionsComponent } from './toggleSections/toggle-sections.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TypographyComponent,
        ToggleSectionsComponent
    ],
    declarations: [
        TypographyComponent,
        ToggleSectionsComponent
    ],
    providers: [],
})
export class SharedModule { }
