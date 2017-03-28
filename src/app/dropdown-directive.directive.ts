import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdownDirective]'
})
export class DropdownDirectiveDirective {
  private open: boolean = false;
  @HostBinding('class.open') get opened()
  {
    return this.open;
  }
  @HostListener('click') opening()
  {
    this.open = true;
  }
  @HostListener('mouseleave') closing()
  {
    this.open = false;
  }

}
