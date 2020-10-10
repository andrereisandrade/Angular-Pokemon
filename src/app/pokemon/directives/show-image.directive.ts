import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[showImage]'
})
export class ShowImageDirective implements OnInit {

  @Input() showImage: string;

  eleRef: ElementRef;

  constructor(eleRef: ElementRef) {
    this.eleRef = eleRef;
  }

  ngOnInit(): void {
    const image = this.showImage ? this.showImage : 'default.jpeg';
    this.eleRef.nativeElement.style.backgroundImage = `url(${image})`;
  }
}
