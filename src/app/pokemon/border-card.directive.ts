import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder(this.initialColor);
  }

  @Input("pkmnBorderCard") borderColor: string; //alias
  //@Input() pkmnBorderCard: string; //Sans alias moins explicite

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#f5f5f5");
  }

  setHeight(heigh: number) {
    this.el.nativeElement.style.height = `${heigh}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
