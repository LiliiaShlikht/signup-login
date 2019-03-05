import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightLabel]'
})
export class HighlightLabelDirective implements OnInit {

  constructor(private renderer: Renderer2,
    private el: ElementRef) { }

  ngOnInit() {
    const label = this.el.nativeElement.children[0];
    const input = this.el.nativeElement.children[1];
    input.onfocus = (e) => {
      if (input.value) {
        this.renderer.addClass(label, 'highlight');
      } else {
        this.renderer.removeClass(label, 'highlight');
      }
    };
    input.onkeyup = () => {
      if (input.value) {
        this.renderer.addClass(label, 'active');
        this.renderer.addClass(label, 'highlight');
      } else {
        this.renderer.removeClass(label, 'active');
        this.renderer.removeClass(label, 'highlight');
      }
    };
    input.onblur = () => {
      if (input.value) {
        this.renderer.removeClass(label, 'highlight');
      } else {
        this.renderer.removeClass(label, 'active');
        this.renderer.removeClass(label, 'highlight');
      }
    }
  }
}
