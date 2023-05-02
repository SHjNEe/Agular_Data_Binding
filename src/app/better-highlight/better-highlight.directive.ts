import { Directive, ElementRef, Renderer2, OnInit,Input, HostListener, HostBinding } from '@angular/core';
import { Event } from "@angular/router";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = 'red';
  @Input() appBetterHighlight: string = 'violet';
  @HostBinding('style.color') color : string = this.defaultColor;

  constructor( private elementRef: ElementRef, private renderer : Renderer2) {

   }
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
   }
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','red');
    this.color = this.defaultColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
      // this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
    this.color = this.appBetterHighlight;

  }

}
