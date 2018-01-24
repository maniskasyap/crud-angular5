import { Directive, ElementRef } from "@angular/core";
import * as $ from "jquery";
import { AfterViewInit } from "@angular/core/src/metadata/lifecycle_hooks";
import * as animateNumber from "jquery.animateNumber";

@Directive({
  selector: "[appAnimateNumber]"
})
export class AnimateNumberDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    animateNumber({
      number: 100
    });
    // $(this.el.nativeElement).animateNumber();
  }
}
