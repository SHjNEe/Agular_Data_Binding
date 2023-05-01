import { Directive,ElementRef, OnInit,Input } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    @Input('appHighlight') appHighlight : string;
    constructor(private elementRef: ElementRef) {
    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = this.appHighlight ?? 'violet';
    }
}