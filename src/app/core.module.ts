import {NgModule} from '@angular/core'

import { DropdownDirectiveDirective } from './dropdown-directive.directive';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [DropdownDirectiveDirective, HomeComponent],
    exports: [DropdownDirectiveDirective],
    
})
export class CoreModule{}