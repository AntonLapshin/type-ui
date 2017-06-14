import { jquery } from "jquery";

class El {
  public children: El[];
  public classNames: string[];
  public text: string;
  public outerHTML: string;

  constructor(el: $) {}

  public toggleClass(className: string, value: boolean): void {
    $(this.el).toggleClass(className, value);
  }
}
