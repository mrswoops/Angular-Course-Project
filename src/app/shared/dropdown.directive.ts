import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // MAX ATTEMPT FOR CLOSING DROPDOWN WHEN USER CLICKS ANYWHERE ELSE
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) { }

    // MAX ATTEMPT
    /* @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    } */

    // BRANDON ATTEMPT
    /* constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onClick(eventData: Event) {
        console.log(this.elRef.nativeElement);
        if(this.elRef.nativeElement.classList.contains('open')){
            this.renderer.removeClass(this.elRef.nativeElement, 'open');
        } else {
            this.renderer.addClass(this.elRef.nativeElement, 'open');
        }
    } */
}
